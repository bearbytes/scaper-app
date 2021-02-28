import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Box, List } from '..'
import { useDebounce } from '../../lib/hooks/useDebounce'
import { useKeybinding } from '../../lib/hooks/useKeybinding'
import { PopupContainer } from '../container/PopupContainer'
import { TextInput, TextInputProps } from './TextInput'

export type AutoCompleteInputProps<T> = Omit<
  TextInputProps,
  'value' | 'onChange' | 'type'
> & {
  fetchOptions(searchText: string): Promise<T[]>
  renderOption(opts: { value: T; isSelected: boolean }): ReactNode
  toStringOption(value: T): string
}

export const AutoCompleteInput = forwardRef<
  HTMLInputElement,
  AutoCompleteInputProps<any>
>((props, ref) => {
  const {
    fetchOptions,
    renderOption,
    toStringOption,
    ...textInputProps
  } = props

  const [value, setValue] = useState('')
  const [options, setOptions] = useState([] as any[])
  const [showOptions, setShowOptions] = useState(false)
  const debouncedValue = useDebounce(value, 200)

  useEffect(() => {
    if (!showOptions) setOptions([])
    else fetchOptions(debouncedValue).then(setOptions)
  }, [debouncedValue, showOptions])

  return (
    <PopupContainer
      popupElement={
        <OptionList
          options={options}
          renderOption={renderOption}
          onSelectOption={option => setValue(toStringOption(option))}
        />
      }
      anchor="bottom"
    >
      <TextInput
        {...textInputProps}
        ref={ref}
        value={value}
        onBlur={() => setShowOptions(false)}
        onFocus={() => setShowOptions(true)}
        onChange={text => {
          setValue(text)
          // TODO
          // props.onChange?.(text)
        }}
      />
    </PopupContainer>
  )
})

function OptionList<T>(props: {
  options: T[]
  renderOption(opts: { value: T; isSelected: boolean }): ReactNode
  onSelectOption(value: T): void
}) {
  const { options, onSelectOption, renderOption } = props
  const num = options.length

  const [selectedIndex, setSelectedIndex] = useState(0)
  const moveCursor = useCallback(
    (diff: number) => {
      setSelectedIndex(i => {
        let j = i + diff
        if (j < 0) j = num - 1
        if (j >= num) j = 0
        return j
      })
    },
    [num],
  )

  useKeybinding('ArrowDown', () => moveCursor(1), [moveCursor])
  useKeybinding('ArrowUp', () => moveCursor(-1), [moveCursor])
  useKeybinding('Enter', () => onSelectOption(options[selectedIndex]), [
    selectedIndex,
    options,
  ])

  if (options.length == 0) return null

  return (
    <Box padTop="XS">
      <List
        items={options}
        renderItem={(value, index) =>
          renderOption({ value, isSelected: index == selectedIndex })
        }
        renderSeparator
        borderColor="elevated"
        borderRadius="S"
        color="input"
      />
    </Box>
  )
}
