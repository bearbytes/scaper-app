import { entries, groupBy, map } from 'lodash'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Card, Grid, Label, Table } from '@components'
import { prisma } from '../lib/prisma'
import { Masonry } from 'masonic'

type SkillsPageProps = {
  categories: Category[]
}
type Category = {
  categoryName: string
  skills: Skill[]
}
type Skill = {
  id: number
  skillName: string
  skillCount1: number
  skillCount2: number
  skillCount3: number
}

export default function SkillsPage(props: SkillsPageProps) {
  return (
    <Masonry
      items={props.categories}
      columnGutter={8}
      columnWidth={250}
      render={({ data }) => <CategoryBlock category={data} />}
    />
  )
}

function CategoryBlock(props: { category: Category }) {
  const { categoryName, skills } = props.category
  return (
    <Card>
      <Label bold text={categoryName} />
      <Table
        rows={skills}
        columns={[
          {
            flex: 10,
            renderCell: skill => (
              <Label text={skill.skillName} linkTo={`/skill/${skill.id}`} />
            ),
          },
          {
            renderCell: skill => (
              <Label
                alignRight
                padLeft="S"
                text={skill.skillCount1.toString()}
              />
            ),
          },
          {
            renderCell: skill => (
              <Label
                alignRight
                padLeft="S"
                text={skill.skillCount2.toString()}
              />
            ),
          },
          {
            renderCell: skill => (
              <Label
                alignRight
                padLeft="S"
                text={skill.skillCount3.toString()}
              />
            ),
          },
        ]}
      />
    </Card>
  )
}

export async function getStaticProps() {
  const skills = await prisma.skill.findMany({
    include: {
      category: true,
      person_skill: { include: { level: true } },
    },
  })

  const props: SkillsPageProps = {
    categories: map(
      entries(groupBy(skills, skill => skill.category.name)),
      ([categoryName, skills]) => ({
        categoryName,
        skills: skills.map(skill => ({
          id: skill.id,
          skillName: skill.name,
          skillCount1: skill.person_skill.filter(it => it.level.level == 1)
            .length,
          skillCount2: skill.person_skill.filter(it => it.level.level == 2)
            .length,
          skillCount3: skill.person_skill.filter(it => it.level.level == 3)
            .length,
        })),
      }),
    ),
  }

  return { props }
}
