import { Column, ColumnProps } from '../layout/FlexBox'
import {
  UseFormMethods,
  SubmitHandler,
  FieldError,
  RegisterOptions,
} from 'react-hook-form'
import { createContext, useContext } from 'react'
import { Label } from '../typography/Label'
import { TextInput } from './TextInput'

export type FormProps<T> = ColumnProps & {
  form: UseFormMethods<T>
  onSubmit: SubmitHandler<T>
}

export const formContext = createContext<UseFormMethods<any>>(null as any)

export function Form<T>(props: FormProps<T>) {
  const { form, onSubmit, ...columnProps } = props
  const { handleSubmit, errors } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <formContext.Provider value={form}>
        <Column {...columnProps} />
      </formContext.Provider>
    </form>
  )
}

export type FormFieldProps = {
  label: string
  name: string
  type?: 'text' | 'number'
  options?: RegisterOptions
}

export function FormField(props: FormFieldProps) {
  const { name, label, type, options } = props
  const { errors, register } = useContext(formContext)

  return (
    <Column gap="XXS">
      <Label text={label} />
      <TextInput
        type={type}
        name={name}
        ref={register(options)}
        error={errors[name] != null}
      />
      <Label small textColor="error" text={errors[name]?.message} />
    </Column>
  )
}
