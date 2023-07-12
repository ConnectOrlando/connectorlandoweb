import Head from 'next/head';
import { Segment, Input, Form, Header, Button } from 'semantic-ui-react';
import classNames from 'classnames';
import forgotPasswordStyles from '@app/styles/forgotPassword.module.css';

export default function forgotPassword() {
  return (
    <>
      <Head>
        <title>Find My Account - ConnectOrlando</title>
        <meta
          name="description"
          content="Get help accessing your ConnectOrlando account by
          entering your email"
        />
      </Head>
      <main className={forgotPasswordStyles.center}>
        <Segment className={forgotPasswordStyles.segment}>
          <Header className={forgotPasswordStyles.mainHeader} as="h1">
            Forgot Password
          </Header>
          <p className={forgotPasswordStyles.mainHeaderParagraph}>
            Enter your email address associated with your ConnectOrlando account
            and we&apos;ll send you a password reset link.
          </p>
          <label
            className={classNames(
              forgotPasswordStyles.inputHeader,
              forgotPasswordStyles.capitalize,
              forgotPasswordStyles.bold
            )}
          >
            email
          </label>
          <Input fluid placeholder="name@example.com" />
          <Form.Field className={forgotPasswordStyles.verticalSpacing}>
            <Button
              color="blue"
              fluid
              className={classNames(
                forgotPasswordStyles.resetPasswordButton,
                forgotPasswordStyles.capitalize
              )}
            >
              send me a reset link
            </Button>
          </Form.Field>
        </Segment>
      </main>
    </>
  );
}
