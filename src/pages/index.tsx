import { Box, Column, Label, Row } from '@components'
import { GetServerSidePropsContext } from 'next'
import { prisma } from '../lib/prisma'

type IndexPageProps = {
  teams: string[]
}

export default function Index(props: IndexPageProps) {
  return (
    <Column>
      {props.teams.map(team => (
        <Label key={team} text={team} />
      ))}
    </Column>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
    teams: teamsWithPersons.map(it => it.name),
  }

  return { props }
}
