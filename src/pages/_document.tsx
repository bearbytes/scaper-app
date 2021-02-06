import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const renderPage = ctx.renderPage

    try {
      return await initialPropsWithInjectedStyles()
    } finally {
      sheet.seal()
    }

    async function initialPropsWithInjectedStyles() {
      ctx.renderPage = renderPageAndCollectStyles

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    }

    function renderPageAndCollectStyles() {
      return renderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })
    }
  }
}
