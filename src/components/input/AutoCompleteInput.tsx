import { suggestionList } from 'nexus/dist/core'
import React, { useEffect, useState } from 'react'
import { Box, List, Label } from '..'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { PopupContainer } from '../container/PopupContainer'
import { TextInput, TextInputProps } from './TextInput'

export type AutoCompleteInputProps = TextInputProps & {
  fetchSuggestions(value: string): Promise<string[]>
}

export function AutoCompleteInput(props: AutoCompleteInputProps) {
  const { fetchSuggestions, ...textInputProps } = props

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([] as string[])
  const debouncedValue = useDebounce(value, 200)

  useEffect(() => {
    fetchSuggestions(debouncedValue).then(setSuggestions)
  }, [debouncedValue])

  return (
    <PopupContainer
      popupElement={<SuggestionList suggestions={suggestions} />}
      anchor="bottom"
    >
      <TextInput
        {...textInputProps}
        onChange={text => {
          setValue(text)
          props.onChange?.(text)
        }}
      />
    </PopupContainer>
  )
}

function SuggestionList(props: { suggestions: string[] }) {
  if (props.suggestions.length == 0) return null

  return (
    <Box padTop="XS">
      <List
        items={props.suggestions}
        renderItem={item => <Label text={item} />}
        borderColor="elevated"
        borderRadius="S"
        pad="M"
        color="semiTransparent"
        style={{ backdropFilter: 'blur(5px)' }}
      />
    </Box>
  )
}
