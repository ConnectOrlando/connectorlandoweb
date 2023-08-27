import Head from 'next/head';
import confirmEmailStyles from '@app/styles/confirmEmail.module.css';
import React from 'react';
import { Button } from 'semantic-ui-react';

export default function confirmEmail() {
  return (
    <>
      <Head>
        <title>Confirm Email - ConnectOrlando</title>
        <meta name="description" content="Confirmed email page" />
      </Head>
      <main className={confirmEmailStyles.center}>
        <img
          src="https://slang.net/img/slang/lg/blue-checked_6094.png"
          alt="checkmark"
          className={confirmEmailStyles.checkmark}
        ></img>
        <h1>
          <strong>Email Verified!</strong>
        </h1>
        <br></br>
        <p>
          <em>Your email has now been verified!</em>
        </p>
        <p>
          <em>Enjoy your experience on ConnectOrlando!</em>
        </p>
        <div>
          <Button animated="fade">
            <Button.Content visible>Click here to return home</Button.Content>
            <Button.Content hidden>Home</Button.Content>
          </Button>
        </div>
      </main>
    </>
  );
}
