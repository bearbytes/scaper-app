import { Column, ColumnProps } from '../layout/FlexBox'
import {
  useForm,
  UseFormOptions,
  UseFormMethods,
  SubmitHandler,
  FieldError,
  RegisterOptions,
} from 'react-hook-form'
import { createContext, useContext } from 'react'
import { Label } from '../typography/Label'
import { TextInput, TextInputProps } from './TextInput'

export type FormProps<T> = ColumnProps & {
  options: UseFormOptions<T, any>
  onSubmit: SubmitHandler<T>
}

export const formContext = createContext<UseFormMethods<any>>(null as any)

export function Form<T>(props: FormProps<T>) {
  const { options, onSubmit, ...columnProps } = props

  const form = useForm<T>(options)

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <formContext.Provider value={form}>
        <Column {...columnProps} />
      </formContext.Provider>
    </form>
  )
}

export type FormFieldProps = {
  name: string
  label: string
  options?: RegisterOptions
} & Pick<TextInputProps, 'type' | 'prefix'>

export function FormField(props: FormFieldProps) {
  const { name, label, options, ...textInputProps } = props
  const { errors, register } = useContext(formContext)

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
