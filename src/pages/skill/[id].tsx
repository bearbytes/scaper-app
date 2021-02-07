import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { Card, Column, Grid, Label, Row, StarRating } from '@components'
import { prisma } from '../../lib/prisma'

type SkillPageProps = {
  skillName: string
  categoryName: string
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
      <Card maxWidth={250}>
        {props.persons.map(person => (
          <Row key={person.abbreviation} spaceBetween>
            <Label
              text={person.name}
              linkTo={`/person/${person.abbreviation}`}
            />
            <StarRating rating={person.level} max={3} />
          </Row>
        ))}
      </Card>
    </Column>
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
          person: true,
          level: true,
        },
      },
    },
  })

  const props: SkillPageProps = {
    skillName: skill.name,
    categoryName: skill.category.name,
    persons: skill.person_skill.map(({ person, level }) => ({
      abbreviation: person.abbreviation,
      name: `${person.firstname} ${person.lastname}`,
      level: level.level,
    })),
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
