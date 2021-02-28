import React from 'react'
import { Label } from '../typography/Label'
import { AutoCompleteInput, AutoCompleteInputProps } from './AutoCompleteInput'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import { Column } from '../layout/FlexBox'
import { filter, join } from 'lodash'

export type LocationInputProps = Omit<
  AutoCompleteInputProps<Location>,
  'fetchOptions' | 'renderOption'
>

export function LocationInput(props: LocationInputProps) {
  return (
    <AutoCompleteInput
      fetchOptions={fetchOptions}
      renderOption={renderFeature}
      {...props}
    />
  )
}

type Properties = {
  name: string
  county?: string
  country: string
}

async function fetchOptions(searchText: string) {
  const response = await fetch(
    `https://photon.komoot.io/api/?q=${searchText}&osm_tag=place&limit=5&lang=en`,
  )
  const json = (await response.json()) as FeatureCollection<
    Geometry,
    Properties
  >

  console.log(json)
  return json.features
}

function renderFeature(feature: Feature<Geometry, Properties>) {
  const { name, country, county } = feature.properties

  return (
    <Column padVertical="S">
      <Label xsmall text={join(filter([country, county], Boolean), '/')} />
      <Label text={name} />
    </Column>
  )
}
