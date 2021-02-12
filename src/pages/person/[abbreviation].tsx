import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { Card, Column, Grid, Label, Row, StarRating } from '@components'
import { prisma } from '../../lib/prisma'
import { entries, groupBy, map } from 'lodash'
import { Masonry } from 'masonic'

type PersonPageProps = {
  name: string
  teamRoles: TeamRole[]
  skillCategories: SkillCategory[]
}
type TeamRole = {
  teamName: string
  roleName: string
}
type SkillCategory = {
  categoryName: string
  skills: Skill[]
}
type Skill = {
  id: number
  skillName: string
  level: number
}

export default function PersonPage(props: PersonPageProps) {
  return (
    <Column gap="M">
      <Label bold large text={props.name} />
      {props.teamRoles.map(({ teamName, roleName }) => (
        <Label key={roleName} text={`${roleName} in ${teamName}`} />
      ))}
      <Masonry
        columnGutter={8}
        columnWidth={250}
        items={props.skillCategories}
        render={({ data }) => <SkillCategoryBlock skillCategory={data} />}
      />
    </Column>
  )
}

function SkillCategoryBlock(props: { skillCategory: SkillCategory }) {
  const { categoryName, skills } = props.skillCategory

  return (
    <Card>
      <Label padBottom="M" bold text={categoryName} />
      {skills.map(({ id, skillName, level }) => (
        <Row key={skillName} gap="M">
          <StarRating rating={level} max={3} />
          <Label text={skillName} linkTo={`/skill/${id}`} />
        </Row>
      ))}
    </Card>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const abbreviation = ctx.params.abbreviation as string

  const person = await prisma.person.findFirst({
    where: { abbreviation },
    include: {
      person_certificate: true,
      person_team_role: {
        include: {
          team: true,
          role: true,
        },
      },
      person_skill: {
        include: {
          level: true,
          skill: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  })

  const props: PersonPageProps = {
    name: `${person.firstname} ${person.lastname}`,

    teamRoles: person.person_team_role.map(({ team, role }) => ({
      teamName: team.name,
      roleName: role.role,
    })),

    skillCategories: map(
      entries(groupBy(person.person_skill, it => it.skill.category.name)),
      ([categoryName, personSkills]) => ({
        categoryName,
        skills: personSkills.map(({ skill, level }) => ({
          id: skill.id,
          skillName: skill.name,
          level: level.level,
        })),
      }),
    ),
  }

  return { props }
}

export async function getStaticPaths(ctx: GetStaticPathsContext) {
  const persons = await prisma.person.findMany()
  const paths = persons.map(({ abbreviation }) => ({
    params: { abbreviation },
  }))

  return { paths, fallback: false }
}
