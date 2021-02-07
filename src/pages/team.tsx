import { Column, Grid, Label, Row } from '@components'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Card } from '../components/display/Card'
import { prisma } from '../lib/prisma'

type IndexPageProps = {
  teams: Team[]
}
type Team = {
  name: string
  description: string
  people: Person[]
}
type Person = {
  abbreviation: string
  name: string
  role: string
}

export default function Index({ teams }: IndexPageProps) {
  return (
    <Grid columnWidth={300} gap="M">
      {teams.map(team => (
        <TeamBlock key={team.name} team={team} />
      ))}
    </Grid>
  )
}

function TeamBlock({ team }: { team: Team }) {
  return (
    <Card>
      <Label bold large text={team.name} />
      <Label small text={team.description} />
      <Column padLeft="M" padTop="M" gap="XS">
        {team.people.map(person => (
          <PersonBlock key={person.name} person={person} />
        ))}
      </Column>
    </Card>
  )
}

function PersonBlock({ person }: { person: Person }) {
  const linkTo = '/person/' + person.abbreviation
  return (
    <Grid gap="S" columns="40px 1fr 100px">
      <Label width={40} text={person.abbreviation} linkTo={linkTo} />
      <Label flex={2} text={person.name} linkTo={linkTo} />
      <Label flex={1} text={person.role} />
    </Grid>
  )

  return
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const teamsWithPersons = await prisma.team.findMany({
    include: {
      person_team_role: {
        include: {
          person: true,
          role: true,
        },
      },
    },
  })

  const props: IndexPageProps = {
    teams: teamsWithPersons.map(({ name, description, person_team_role }) => ({
      name,
      description,
      people: person_team_role.map(({ person, role }) => ({
        abbreviation: person.abbreviation,
        name: person.firstname + ' ' + person.lastname,
        role: role.role,
      })),
    })),
  }

  return { props }
}
