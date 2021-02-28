import { Column, ColumnProps } from '../layout/FlexBox'
import { theme } from '../theme'

export type PanelProps = ColumnProps & {}

export function Panel(props: PanelProps) {
  const { ...columnProps } = props
  return <Column maxWidth={600} gap="M" {...columnProps} />
}
