import { Box, Column, Label, Row } from '@components'
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { prisma } from '../lib/prisma'

type IndexPageProps = { teams: Team[] }
type Team = { name: string; description: string; people: Person[] }
type Person = { abbreviation: string; name: string; role: string }

export default function Index({ teams }: IndexPageProps) {
  return (
    <Column gap="L">
      {teams.map(team => (
        <TeamBlock key={team.name} team={team} />
      ))}
    </Column>
  )
}

function TeamBlock({ team }: { team: Team }) {
  return (
    <Column>
      <Label text={team.name} />
      <Label small text={team.description} />
      <Column padLeft="M">
        {team.people.map(person => (
          <PersonBlock key={person.name} person={person} />
        ))}
      </Column>
    </Column>
  )
}

function PersonBlock({ person }: { person: Person }) {
  return <Label text={`[${person.abbreviation}] ${person.name}`} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
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
