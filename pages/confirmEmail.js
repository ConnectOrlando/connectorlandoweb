import Head from 'next/head';
import confirmEmailStyles from '@app/styles/confirmEmail.module.css';
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import Link from 'next/link';

export default function confirmEmail() {
  return (
    <>
      <Head>
        <title>Confirm Email - ConnectOrlando</title>
        <meta name="description" content="Email Confirmation" />
      </Head>
      <main className={confirmEmailStyles.center}>
        <Icon name="check circle" size="massive" />

        <h1>Email Verified!</h1>
        <br></br>
        <p>Your email has now been verified!</p>
        <p>Enjoy your experience on ConnectOrlando!</p>
        <div>
          <Link href="/home">
            <Button animated="fade">
              <Button.Content visible>Click here to return home</Button.Content>
              <Button.Content hidden>Done</Button.Content>
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
