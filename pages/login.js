import Head from 'next/head';
import loginStyles from '@app/styles/login.module.css';
import { Header, Segment, Form, Button, Checkbox } from 'semantic-ui-react';
import cx from 'classnames';
import LabeledInput from '@app/components/pieces/labeledInput';

export default function login() {
  return (
    <>
      <Head>
        <title>Sign In - ConnectOrlando</title>
        <meta
          name="description"
          content="Sign in to your ConnectOrlando account"
        />
      </Head>
      <main className={loginStyles.center}>
        <Segment basic className={loginStyles.segment}>
          <Header
            className={cx(loginStyles.loginHeader, loginStyles.center)}
            as="h1"
          >
            Log In
          </Header>
          <Form>
            <Form.Field>
              <LabeledInput label="Email" placeholder="name@example.com" />
            </Form.Field>

            <Form.Field>
              <LabeledInput label="Password" placeholder="****************" />
            </Form.Field>

            <Form.Field className={loginStyles.topSpacing}>
              <Button
                type="submit"
                fluid
                color="blue"
                className={loginStyles.loginButton}
              >
                log in
              </Button>
            </Form.Field>
            <Form.Field
              className={cx(
                loginStyles.topSpacing,
                loginStyles.toOppositeSides
              )}
            >
              <Checkbox
                className={loginStyles.rememberMeButton}
                label="Remember me"
              ></Checkbox>
              <a
                className={loginStyles.forgotPasswordAnchor}
                href="https://cdn.wallpapersafari.com/74/46/dr3t5f.jpg"
              >
                Forgot Password?
              </a>
            </Form.Field>
            <Form.Field className={loginStyles.topSpacing}>
              <Header
                className={cx(loginStyles.questionHeader, loginStyles.center)}
                as="h5"
              >
                Don&apos;t have an account?
              </Header>
              <a
                className={cx(loginStyles.center, loginStyles.signUpNowAnchor)}
                href="https://cdn.wallpapersafari.com/26/94/LNjd52.jpg"
              >
                Sign up now
              </a>
            </Form.Field>
          </Form>
        </Segment>
      </main>
    </>
  );
}
