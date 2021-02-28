import React, { forwardRef } from 'react'
import { Label } from '../typography/Label'
import { AutoCompleteInput, AutoCompleteInputProps } from './AutoCompleteInput'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import { Column } from '../layout/FlexBox'
import { filter, join } from 'lodash'

export type LocationInputProps = Omit<
  AutoCompleteInputProps<Location>,
  'fetchOptions' | 'renderOption' | 'toStringOption'
>

export const LocationInput = forwardRef<HTMLInputElement, LocationInputProps>(
  (props, ref) => {
    return (
      <AutoCompleteInput
        ref={ref}
        fetchOptions={fetchOptions}
        renderOption={FeatureItem}
        toStringOption={toStringOption}
        {...props}
      />
    )
  },
)

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

  return json.features
}

function FeatureItem(props: {
  value: Feature<Geometry, Properties>
  isSelected: boolean
}) {
  const { name, country, county } = props.value.properties

  return (
    <Column pad="M" color={props.isSelected ? 'focus' : undefined}>
      <Label xsmall text={join(filter([country, county], Boolean), '/')} />
      <Label text={name} />
    </Column>
  )
}
function toStringOption(value: Feature<Geometry, Properties>) {
  return value.properties.name
}
