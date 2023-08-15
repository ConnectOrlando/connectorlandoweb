import Head from 'next/head';
import signupStyles from '@app/styles/signup.module.css';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cx from 'classnames';
import LabeledInput from '@app/components/pieces/labeledInput';

export default function signup() {
  return (
    <>
      <Head>
        <title>Sign up - ConnectOrlando</title>
        <meta name="description" content="Create an account" />
      </Head>
      <main className={signupStyles.center}>
        <Segment basic className={signupStyles.segment}>
          <Form.Field>
            <Header
              className={cx(signupStyles.pageTitle, signupStyles.center)}
              as="h1"
            >
              Create Your Account
            </Header>
          </Form.Field>
          <p className={signupStyles.pageDescription}>
            You will use this email and password to log into your ConnectOrlando
            account.
          </p>
          <Form>
            <Form.Field className={signupStyles.topSpacing}>
              <LabeledInput label="Name" />
            </Form.Field>

            <Form.Field>
              <LabeledInput label="Email" />
            </Form.Field>

            <Form.Field className={signupStyles.topSpacing}>
              <LabeledInput label="Password" />
            </Form.Field>

            <Form.Field className={signupStyles.topSpacing}>
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
            <Form.Field
              className={cx(signupStyles.center, signupStyles.topSpacing)}
            >
              <Header className={signupStyles.loginHeader} as="h4">
                Already have an account?
              </Header>
              <a
                className={signupStyles.loginAnchor}
                href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FO6gkm-nklyw%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=72841007a96142d220bce3d50ec909c3e775a987ac2fd906048991a56ad59afa&ipo=images"
              >
                Log in
              </a>
            </Form.Field>
          </Form>
        </Segment>
      </main>
    </>
  );
}
