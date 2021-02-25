import { Column, ColumnProps } from '../layout/FlexBox'
import { theme } from '../theme'

export type PanelProps = ColumnProps & {
  wide?: boolean
}

export function Panel(props: PanelProps) {
  const { wide, ...columnProps } = props
  return <Column maxWidth={600} {...columnProps} />
}
