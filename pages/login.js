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

export default function login() {
  return (
    <>
      <Head>
        <title>Login - ConnectOrlando</title>
        <meta
          name="desecription"
          content="Login to your ConnectOrlando account"
        />
      </Head>
      <main className={loginStyles.center}>
        <Segment className={loginStyles.segment}>
          <Header className={loginStyles.loginHeader} as="h1">
            Log In
          </Header>
          <Form>
            <Form.Field>
              <label className={loginStyles.infoHeader}>Email</label>
              <input
                className={loginStyles.placeholderText}
                placeholder="name@example.com"
              />
            </Form.Field>
            <Form.Field>
              <label className={loginStyles.infoHeader}>Password</label>
              <input placeholder="****************"></input>
            </Form.Field>
          </Form>
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
          <Form.Field className={loginStyles.verticalSpacing}>
            <Checkbox
              className={loginStyles.rememberMeButton}
              label="Remember me"
            ></Checkbox>
            <Breadcrumb.Section
              className={cx(
                loginStyles.forgotPasswordBreadcrumb,
                loginStyles.toRight
              )}
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
                loginStyles.center,
                loginStyles.decreaseBottomMargin
              )}
              as="h4"
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
        </Segment>
      </main>
    </>
  );
}
