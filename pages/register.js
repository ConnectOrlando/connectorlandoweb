import Head from 'next/head';
import registerStyles from '@app/styles/register.module.css';
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
      <main className={registerStyles.center}>
        <Segment basic className={registerStyles.segment}>
          <Form.Field>
            <Header
              className={cx(registerStyles.pageTitle, registerStyles.center)}
              as="h1"
            >
              Create Your Account
            </Header>
          </Form.Field>
          <p className={registerStyles.pageDescription}>
            You will use this email and password to log into your ConnectOrlando
            account.
          </p>
          <Form>
            <Form.Field className={registerStyles.topSpacing}>
              <LabeledInput label="Name" />
            </Form.Field>

            <Form.Field>
              <LabeledInput label="Email" />
            </Form.Field>

            <Form.Field className={registerStyles.topSpacing}>
              <LabeledInput label="Password" />
            </Form.Field>

            <Form.Field className={registerStyles.topSpacing}>
              <LabeledInput label="Confirm Password" />
            </Form.Field>

            <Button
              color="blue"
              fluid
              className={cx(
                registerStyles.continueButton,
                registerStyles.capitalize
              )}
            >
              Create Account
            </Button>
            <Form.Field
              className={cx(registerStyles.center, registerStyles.topSpacing)}
            >
              <Header className={registerStyles.loginHeader} as="h4">
                Already have an account?
              </Header>
              <a
                className={registerStyles.loginAnchor}
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
