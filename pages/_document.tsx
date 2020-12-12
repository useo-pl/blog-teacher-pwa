import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Teacher Classroom PWA</title>

          <link rel="manifest" href="/static/manifest.json" />
          {/* <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" /> */}
          {/* <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" /> */}
          <link rel="apple-touch-icon" href="/static/classroom.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
