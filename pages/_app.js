import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '@app/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
