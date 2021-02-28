import { Column } from '../layout/FlexBox'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import { Label } from '../typography/Label'
import { TextInput, TextInputProps } from './TextInput'

export type FormFieldProps = {
  name: string
  label: string
  options?: RegisterOptions
} & Pick<TextInputProps, 'type' | 'prefix' | 'icon'>

export function FormField(props: FormFieldProps) {
  const { name, label, options, ...textInputProps } = props
  const { errors, register } = useFormContext()

  return (
    <Column gap="none">
      <Label text={label} />
      <TextInput
        {...textInputProps}
        name={name}
        ref={register(options)}
        error={errors[name] != null}
      />
      <Label textColor="error" text={errors[name]?.message} />
    </Column>
  )
}
