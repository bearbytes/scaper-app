import { Column, ColumnProps } from '../layout/FlexBox'
import {
  useForm,
  UseFormOptions,
  SubmitHandler,
  FormProvider,
} from 'react-hook-form'

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
        <Column gap="M" {...columnProps} />
      </form>
    </FormProvider>
  )
}
