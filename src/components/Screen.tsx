import { ReactNode } from 'react'
import { Box } from './Box'

export function Screen(props: { children: ReactNode }) {
  return (
    <Box
      color={'background'}
      width={'100vw'}
      height={'100vh'}
      textColor={'text'}
    >
      {props.children}
    </Box>
  )
}
