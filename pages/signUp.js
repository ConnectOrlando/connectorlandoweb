import Head from 'next/head';
import signupStyles from '@app/styles/signUp.module.css';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cx from 'classnames';
import LabeledInput from '@app/components/pieces/labeledInput';

export default function signUp() {
  return (
    <>
      <Head>
        <title>Sign up - ConnectOrlando</title>
        <meta name="description" content="Create an account" />
      </Head>
      <main className={signupStyles.center}>
        <Segment basic className={signupStyles.segment}>
          <Header
            className={cx(signupStyles.pageTitle, signupStyles.center)}
            as="h1"
          >
            Create Your Account
          </Header>
          <p className={signupStyles.pageDescription}>
            You will use this email and password to log into your ConnectOrlando
            account.
          </p>
          <Form>
            <Form.Field className={signupStyles.verticalSpacing}>
              <LabeledInput label="Name" />
            </Form.Field>

            <Form.Field>
              <LabeledInput label="Email" />
            </Form.Field>

            <Form.Field className={signupStyles.verticalSpacing}>
              <LabeledInput label="Password" />
            </Form.Field>

            <Form.Field className={signupStyles.verticalSpacing}>
              <LabeledInput label="Confirm Password" />
            </Form.Field>

            <Button
              color="blue"
              fluid
              className={cx(
                signupStyles.continueButton,
                signupStyles.capitalize
              )}
            >
              Create Account
            </Button>
          </Form>
        </Segment>
      </main>
    </>
  );
}
