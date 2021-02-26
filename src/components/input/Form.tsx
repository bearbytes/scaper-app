import { Column, ColumnProps } from '../layout/FlexBox'
import {
  useForm,
  UseFormOptions,
  SubmitHandler,
  RegisterOptions,
  FormProvider,
  useFormContext,
  Controller,
} from 'react-hook-form'
import { Label } from '../typography/Label'
import { TextInput, TextInputProps } from './TextInput'

export type FormProps<T> = ColumnProps & {
  options: UseFormOptions<T, any>
  onSubmit: SubmitHandler<T>
}

export function Form<T>(props: FormProps<T>) {
  const { options, onSubmit, ...columnProps } = props

  const form = useForm<T>(options)

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Column {...columnProps} />
      </form>
    </FormProvider>
  )
}

export type FormFieldProps = {
  name: string
  label: string
  options?: RegisterOptions
  // transform?(value: string): string
} & Pick<TextInputProps, 'type' | 'prefix'>

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
