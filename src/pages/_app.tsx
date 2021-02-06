import { RendererProvider } from 'react-fela'
import { FelaRenderer } from '../FelaRenderer'

export default function MyApp({ Component, pageProps }) {
  return (
    <RendererProvider renderer={FelaRenderer}>
      <Component {...pageProps} />
    </RendererProvider>
  )
}
