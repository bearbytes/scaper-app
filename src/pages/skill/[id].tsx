import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { Card, Column, Grid, Label, Row, StarRating } from '@components'
import { prisma } from '../../lib/prisma'
import { GiTreasureMap } from 'react-icons/gi'
import { entries, first, groupBy, map } from 'lodash'

type SkillPageProps = {
  skillName: string
  categoryName: string
  teams: Team[]
}

type Team = {
  teamName: string
  persons: Person[]
}

type Person = {
  abbreviation: string
  name: string
  level: number
}

export default function SkillPage(props: SkillPageProps) {
  return (
    <Column gap="M">
      <Label bold large text={props.skillName} />
      <Label text={props.categoryName} />
      <Grid columnWidth={250} gap="M">
        {props.teams.map(team => (
          <TeamBlock key={team.teamName} team={team} />
        ))}
      </Grid>
    </Column>
  )
}

function TeamBlock(props: { team: Team }) {
  const { teamName, persons } = props.team

  return (
    <Card gap="M">
      <Label bold text={teamName} />
      <Column>
        {persons.map(person => (
          <Row key={person.abbreviation} spaceBetween>
            <Label
              text={person.name}
              linkTo={`/person/${person.abbreviation}`}
            />
            <StarRating rating={person.level} max={3} />
          </Row>
        ))}
      </Column>
    </Card>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const id = parseInt(ctx.params.id as string)

  const skill = await prisma.skill.findUnique({
    where: { id },
    include: {
      category: true,
      person_skill: {
        include: {
          person: {
            include: {
              person_team_role: {
                include: {
                  team: true,
                },
              },
            },
          },
          level: true,
        },
      },
    },
  })

  const props: SkillPageProps = {
    skillName: skill.name,
    categoryName: skill.category.name,
    teams: map(
      entries(
        groupBy(
          skill.person_skill,
          it => first(it.person.person_team_role).team.name,
        ),
      ),
      ([teamName, personSkills]) => ({
        teamName,
        persons: personSkills.map(({ person, level }) => ({
          abbreviation: person.abbreviation,
          name: `${person.firstname} ${person.lastname}`,
          level: level.level,
        })),
      }),
    ),
  }

  return { props }
}

export async function getStaticPaths(ctx: GetStaticPathsContext) {
  const skills = await prisma.skill.findMany()
  const paths = skills.map(({ id }) => ({
    params: { id: id.toString() },
  }))

  return { paths, fallback: false }
}
