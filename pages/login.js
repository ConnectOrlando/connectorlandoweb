import Head from 'next/head';
import { Button, Checkbox, Form, Header, Segment } from 'semantic-ui-react';
import LoginStyles from '@app/styles/login.module.css';
import classNames from 'classnames';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - ConnectOrlando</title>
        <meta
          name="description"
          content="Login into your ConnectOrlando account"
        />
      </Head>
      <main>
        <Segment className={LoginStyles.segment} raised>
          <Header as="h1" className={LoginStyles.continueButton}>
            Sign In
          </Header>
          <Form>
            <Form.Field>
              <input placeholder="Email or phone number" />
            </Form.Field>
            <Form.Field>
              <input placeholder="Password" />
            </Form.Field>
            <Button
              className={LoginStyles.continueButton}
              type="submit"
              color="blue"
            >
              Continue
            </Button>
            <Form.Field>
              <Checkbox
                className={LoginStyles.buttonSpacing}
                label="Remember me"
              />
              <a
                className={classNames(
                  LoginStyles.sideSpacing,
                  LoginStyles.makeBlack
                )}
                href="https://www.w3schools.com" //change link to "forgot password" page
              >
                Forgot password?
              </a>
            </Form.Field>
            <Form.Field className={LoginStyles.center}>
              New to ConnectOrlando?
              <a
                className={classNames(
                  LoginStyles.singleSpacing,
                  LoginStyles.newUserButton
                )}
                href="https://www.w3schools.com" //change link to "new user" page
              >
                Sign up now.
              </a>
            </Form.Field>
          </Form>
          <Form.Field></Form.Field>
        </Segment>
      </main>
    </>
  );
}
