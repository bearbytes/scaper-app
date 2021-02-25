import { ReactNode } from 'react'
import { Column, ColumnProps } from '../layout/FlexBox'
import { Label } from '../typography/Label'

export type FormFieldProps = ColumnProps & {
  label: string
  children: ReactNode
}

export function FormField(props: FormFieldProps) {
  const { label, children, ...columnProps } = props
  return (
    <Column gap="XXS" {...columnProps}>
      <Label text={label} />
      {children}
    </Column>
  )
}
