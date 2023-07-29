import Head from 'next/head';
import loginStyles from '@app/styles/login.module.css';
import {
  Header,
  Segment,
  Form,
  Button,
  Checkbox,
  Breadcrumb,
} from 'semantic-ui-react';
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
      <main className={loginStyles.centerMain}>
        <Segment basic className={loginStyles.segment}>
          <Header className={loginStyles.loginHeader} as="h1">
            Log In
          </Header>
          <Form>
            <Form.Field>
              <LabeledInput label="Email" placeholder="name@example.com" />
              <LabeledInput label="Password" placeholder="****************" />
            </Form.Field>

            <Form.Field className={loginStyles.verticalSpacing}>
              <Button
                type="submit"
                fluid
                color="blue"
                className={cx(loginStyles.loginButton, loginStyles.capitalize)}
              >
                log in
              </Button>
            </Form.Field>
            <Form.Field
              className={cx(
                loginStyles.verticalSpacing,
                loginStyles.toOppositeSides
              )}
            >
              <Checkbox
                className={loginStyles.rememberMeButton}
                label="Remember me"
              ></Checkbox>
              <Breadcrumb.Section
                className={loginStyles.forgotPasswordBreadcrumb}
                a
                href="https://cdn.wallpapersafari.com/74/46/dr3t5f.jpg"
                link
              >
                Forgot Password?
              </Breadcrumb.Section>
            </Form.Field>
            <Form.Field className={loginStyles.verticalSpacing}>
              <Header
                className={cx(
                  loginStyles.questionHeader,
                  loginStyles.center,
                  loginStyles.decreaseBottomMargin
                )}
                as="h5"
              >
                Don&apos;t have an account?
              </Header>
              <Breadcrumb.Section
                className={cx(
                  loginStyles.center,
                  loginStyles.signUpNowBreadcrumb
                )}
                a
                href="https://cdn.wallpapersafari.com/26/94/LNjd52.jpg"
                link
              >
                Sign up now.
              </Breadcrumb.Section>
            </Form.Field>
          </Form>
        </Segment>
      </main>
    </>
  );
}
