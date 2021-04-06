import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { randomBytes } from 'crypto';

const MyDocument = ({ nonce }: any) => {
  return (
    <Html lang="en">
      <Head nonce={nonce}></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const nonce = randomBytes(16).toString('base64');
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (pageProps) =>
          sheet.collectStyles(<App {...pageProps} />),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      nonce,
      styles: (
        <>
          {initialProps.styles}
          <style nonce={nonce}>{sheet.instance.toString()}</style>
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
