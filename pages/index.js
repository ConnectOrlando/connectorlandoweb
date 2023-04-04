import Head from 'next/head';
import Hero from '@app/components/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>ConnectOrlando</title>
        <meta
          name="description"
          content="Connecting Women-Owned startups with investors"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          title1="Connect"
          title2="Orlando"
          subtitle="Empowering Women-Owned Startups to Connect and Succeed with ConnectOrlando - Your Gateway to Investor Opportunities"
          buttonText="Get Started"
          buttonLink="/random"
        />
      </main>
    </>
  );
}
