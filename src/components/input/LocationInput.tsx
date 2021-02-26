import React from 'react'
import { AutoCompleteInput } from './AutoCompleteInput'
import { TextInputProps } from './TextInput'

export type LocationInputProps = TextInputProps

export function LocationInput(props: LocationInputProps) {
  return (
    <AutoCompleteInput
      fetchSuggestions={async value => {
        const response = await fetch(
          `https://photon.komoot.io/api/?q=${value}&limit=10`,
        )
        const json = await response.json()
        return json.features
          .filter((feature: any) => feature.properties.osm_key == 'place')
          .map((feature: any) => feature.properties.name)
      }}
      {...props}
    />
  )
}
