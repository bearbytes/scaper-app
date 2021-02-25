import { ButtonProps } from '../button/Button'
import { BoxProps, useBoxStyle } from '../layout/Box'

type SubmitButtonProps = BoxProps & {}

export function SubmitButton(props: SubmitButtonProps) {
  const { ...boxProps } = props

  return (
    <input
      type="submit"
      css={[
        useBoxStyle({
          pad: 'M',
          color: 'elevated',
          borderRadius: 'S',
          ...boxProps,
        }),
      ]}
    />
  )
}
