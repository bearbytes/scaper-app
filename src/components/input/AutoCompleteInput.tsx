import React, { ReactNode, useEffect, useState } from 'react'
import { Box, List } from '..'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { PopupContainer } from '../container/PopupContainer'
import { TextInput, TextInputProps } from './TextInput'

export type AutoCompleteInputProps<T> = Omit<
  TextInputProps,
  'value' | 'onChange' | 'type'
> & {
  fetchOptions(searchText: string): Promise<T[]>
  renderOption(option: T): ReactNode
}

export function AutoCompleteInput<T>(props: AutoCompleteInputProps<T>) {
  const { fetchOptions, renderOption, ...textInputProps } = props

  const [value, setValue] = useState('')
  const [options, setOptions] = useState([] as T[])
  const debouncedValue = useDebounce(value, 200)

  useEffect(() => {
    fetchOptions(debouncedValue).then(setOptions)
  }, [debouncedValue])

  return (
    <PopupContainer
      popupElement={
        <OptionList options={options} renderOption={renderOption} />
      }
      anchor="bottom"
    >
      <TextInput
        {...textInputProps}
        onChange={text => {
          setValue(text)
          // TODO
          // props.onChange?.(text)
        }}
      />
    </PopupContainer>
  )
}

function OptionList<T>(props: {
  options: T[]
  renderOption(option: T): ReactNode
}) {
  if (props.options.length == 0) return null

  return (
    <Box padTop="XS">
      <List
        items={props.options}
        renderItem={props.renderOption}
        renderSeparator
        borderColor="elevated"
        borderRadius="S"
        pad="M"
        color="input"
      />
    </Box>
  )
}
