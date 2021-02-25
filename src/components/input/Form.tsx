import { Column, ColumnProps } from '../layout/FlexBox'

export type FormProps = ColumnProps & {}

export function Form(props: FormProps) {
  const { ...columnProps } = props
  return <Column {...columnProps} />
}
