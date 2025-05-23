
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lemonada:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: 'url(/images/coppola-family.jpeg), url(/images/pottery.jpeg)'
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

