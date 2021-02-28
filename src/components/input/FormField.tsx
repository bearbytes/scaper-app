import { Column } from '../layout/FlexBox'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import { Label } from '../typography/Label'
import { TextInput, TextInputProps } from './TextInput'
import { LocationInput } from './LocationInput'

export type FormFieldProps = {
  name: string
  label: string
  options?: RegisterOptions
  type: 'string' | 'number' | 'Location'
} & Pick<TextInputProps, 'prefix' | 'icon'>

export function FormField(props: FormFieldProps) {
  const { name, label, options, type, ...textInputProps } = props
  const { errors, register } = useFormContext()

  const InputElement = pickInput()

  return (
    <Column gap="XS">
      <Label text={label} />
      <InputElement
        {...textInputProps}
        name={name}
        ref={register(options)}
        error={errors[name] != null}
      />
      <Label textColor="error" text={errors[name]?.message} />
    </Column>
  )

  function pickInput() {
    switch (type) {
      case 'number':
      case 'string':
        return TextInput
      case 'Location':
        return LocationInput
    }
  }
}
