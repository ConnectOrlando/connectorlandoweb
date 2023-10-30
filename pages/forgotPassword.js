import Head from 'next/head';
import { Segment, Form, Header, Button, Message } from 'semantic-ui-react';
import cx from 'classnames';
import forgotPasswordStyles from '@app/styles/forgotPassword.module.css';
import LabeledInput from '@app/components/pieces/labeledInput';
import { useEffect, useState } from 'react';
import { usePost } from 'swirl-react';
import _ from 'lodash';
import validator from 'validator';
import { Urls } from '@app/constants/urls';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  //Form validation
  const [showEmailError, setShowEmailError] = useState(false);

  const { isLoading, data, error, trigger } = usePost({
    url: `${Urls.API}/auth/forgot-password`,
    body: {
      email: email,
    },
  });

  function handleEmailInput(event) {
    setEmail(event?.target?.value?.trim());
  }

  //log data and error
  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  //Check if submit button should be enabled
  const isButtonEnabled = isEmailValid();

  function isEmailValid() {
    return !_.isEmpty(email) && validator.isEmail(email);
  }

  //Validate email everytime it changes
  useEffect(() => {
    if (isEmailValid()) {
      setShowEmailError(false);
    }
  }, [email]);

  //Utility function to validate email
  function validateEmail() {
    setShowEmailError(_.isEmpty(email) ? false : !isEmailValid());
  }

  return (
    <>
      <Head>
        <title>Forgot Password - ConnectOrlando</title>
        <meta
          name="description"
          content="Get help accessing your ConnectOrlando account by
          entering your email"
        />
      </Head>

      <main className={forgotPasswordStyles.center}>
        {/*Check data -> show form if data is not received */}
        {data ? (
          <div>
            <p> Success Message!!</p>
          </div>
        ) : (
          <Segment basic className={forgotPasswordStyles.segment}>
            <Header className={forgotPasswordStyles.mainHeader} as="h1">
              Forgot Password
            </Header>
            <p className={forgotPasswordStyles.description}>
              Enter the email address associated with your ConnectOrlando
              account and we&apos;ll send you a password reset link.
            </p>
            {/* If there is an error from the API, we set the form to error state to show any messages, etc. */}
            {/* Here we set the field to error state if there is an error with the email */}
            <Form error={error}>
              <Form.Field error={showEmailError}>
                {/* Here we use the LabeledInput component again, but this time we pass in a few more props:
                    - onBlur - this is a function that will run when the user clicks out of the input
                    - errorMessage - this is the message that will show if there is an error.
                      However, we only want to show it if there is an error (see the ternary operator)
              */}
                <LabeledInput
                  label="Email"
                  placeholder="name@example.com"
                  errorMessage={
                    showEmailError ? 'Please enter a valid email' : ''
                  }
                  disabled={isLoading}
                  onBlur={validateEmail}
                  onChange={handleEmailInput}
                />
              </Form.Field>
              <Form.Field className={forgotPasswordStyles.verticalSpacing}>
                {/* Here we show the submit button. Note that we:
                    - disable the button if the form is loading or if the button is not enabled
                    - show a loading indicator if the form is loading
                    - onClick, we call the trigger function from the usePost hook to send the API call
              */}
                {/* Error Message */}
                {error && !isLoading && (
                  <Message
                    error
                    header="Error resetting password"
                    content="Please try again. If the issue persists, please contact our support team at support@connectorlando.tech"
                  />
                )}
                <Button
                  color="blue"
                  fluid
                  disabled={!isButtonEnabled || isLoading}
                  onClick={trigger}
                  loading={isLoading}
                  className={cx(
                    forgotPasswordStyles.resetPasswordButton,
                    forgotPasswordStyles.capitalize
                  )}
                >
                  Send me a reset link
                </Button>
              </Form.Field>
            </Form>
          </Segment>
        )}
      </main>
    </>
  );
}
