import Head from 'next/head';
import registerStyles from '@app/styles/register.module.css';
import {
  Header,
  Segment,
  Form,
  Button,
  Message,
  Icon,
} from 'semantic-ui-react';
import cx from 'classnames';
import LabeledInput from '@app/components/pieces/labeledInput';
import { useState, useEffect } from 'react';
import { usePost } from 'swirl-react';
import { Urls } from '@app/constants/urls';
import _ from 'lodash-es';
import validator from 'validator';
import Link from 'next/link';

export default function Register() {
  // Create all the state variables we need to track the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // This will track whether or not the password is visible
  const [showPassword, setShowPassword] = useState(false);

  // Create all the variables needed to track the form validation
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordConfirmationError, setShowPasswordConfirmationError] =
    useState(false);

  // This will track whether or not the submit button should be enabled
  // It will be enabled if all the inputs are valid
  const isSubmitButtonEnabled =
    !_.isEmpty(name) &&
    isEmailValid() &&
    isPasswordValid() &&
    isPasswordConfirmationValid();

  // This will track the state of the API call
  const { data, error, isLoading, trigger } = usePost({
    url: `${Urls.API}/auth/signup`,
    body: {
      name,
      email,
      password,
    },
  });

  // useEffect will run the function passed in as the first argument
  // every time the anything in the second argument changes
  // in this case, we want to log the data and error every time they change
  // in the future, we will want to do something with the data and error
  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  // This validates the email, password, and password confirmation
  // every time they change
  useEffect(() => {
    if (isEmailValid()) {
      setShowEmailError(false);
    }

    if (isPasswordValid()) {
      setShowPasswordError(false);
    }

    if (isPasswordConfirmationValid()) {
      setShowPasswordConfirmationError(false);
    }
  }, [email, password, passwordConfirmation]);

  // these are just utility functions to validate the email, password, and password confirmation
  function validateEmail() {
    setShowEmailError(_.isEmpty(email) ? false : !isEmailValid());
  }

  function isEmailValid() {
    return !_.isEmpty(email) && validator.isEmail(email);
  }

  function validatePassword() {
    const areBothEmpty = _.isEmpty(password) && _.isEmpty(passwordConfirmation);
    setShowPasswordError(areBothEmpty ? false : !isPasswordValid());
  }

  function isPasswordValid() {
    return !_.isEmpty(password) && validator.isStrongPassword(password);
  }

  function validatePasswordConfirmation() {
    const areBothEmpty = _.isEmpty(password) && _.isEmpty(passwordConfirmation);
    setShowPasswordConfirmationError(
      areBothEmpty ? false : !isPasswordConfirmationValid()
    );
  }

  function isPasswordConfirmationValid() {
    return (
      !_.isEmpty(password) &&
      !_.isEmpty(passwordConfirmation) &&
      password === passwordConfirmation
    );
  }

  return (
    <>
      <Head>
        <title>Sign up - ConnectOrlando</title>
        <meta name="description" content="Create an account" />
      </Head>
      <main className={registerStyles.center}>
        {/* Here is a condition -
            if we have data from the API, that means the account was created successfully
            so we show a success message
        */}
        {data ? (
          <Segment basic className={registerStyles.successSegment}>
            <Header icon>
              <Icon name="check circle" color="blue" />
              Succesfully created account!
            </Header>
            <p className={registerStyles.pageDescription}>
              You can now log into your ConnectOrlando account
            </p>
            <Link href="/">
              <Button primary>Home</Button>
            </Link>
          </Segment>
        ) : (
          //    Otherwise, we show the form here
          <Segment basic className={registerStyles.formSegment}>
            <Header
              className={cx(registerStyles.pageTitle, registerStyles.center)}
              as="h1"
            >
              Create Your Account
            </Header>
            <p className={registerStyles.pageDescription}>
              You will use this email and password to log into your
              ConnectOrlando account.
            </p>
            {/* If there is an error from the API, we set the form to error state to show any messages, etc. */}
            <Form error={error}>
              <Form.Field className={registerStyles.topSpacing}>
                {/* Two important things here:
                    - Note that the input is disabled whenever the API call is loading
                    - also, note how we take the value from the input and set it to the name variable
                */}
                <LabeledInput
                  label="Name"
                  disabled={isLoading}
                  onChange={event => setName(event?.target?.value?.trim())}
                />
              </Form.Field>

              {/* Here we set the field to error state if there is an error with the email */}
              <Form.Field error={showEmailError}>
                {/* Here we use the LabeledInput component again, but this time we pass in a few more props:
                    - onBlur - this is a function that will run when the user clicks out of the input
                    - errorMessage - this is the message that will show if there is an error.
                          However, we only want to show it if there is an error (see the ternary operator)
                */}
                <LabeledInput
                  label="Email"
                  errorMessage={
                    showEmailError ? 'Please enter a valid email' : ''
                  }
                  disabled={isLoading}
                  onBlur={validateEmail}
                  onChange={event => setEmail(event?.target?.value?.trim())}
                />
              </Form.Field>

              <Form.Field
                className={registerStyles.topSpacing}
                error={showPasswordError}
              >
                {/* Here we use the LabeledInput component again, but this time we pass in a few more props:
                    - description - this is the description that will show under the input
                    - icon - this is the icon that will show on the right side of the input (Semantic UI Icon).
                             Notice that we use a ternary operator to determine which  icon to show -
                            if the password is visible, we show the eye slash icon, otherwise we show the eye icon
                    - onIconClick - this is the function that will run when the user clicks on the icon
                    - type - this is the type of input. In our case, we want to show the password if the user clicks the icon,
                            which sets the variable showPassword to true
                */}
                <LabeledInput
                  label="Password"
                  description="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                  type={showPassword ? null : 'password'}
                  disabled={isLoading}
                  onBlur={validatePassword}
                  icon={showPassword ? 'eye slash' : 'eye'}
                  onIconClick={() => setShowPassword(!showPassword)}
                  errorMessage={
                    showPasswordError
                      ? 'Password does not meet requirements'
                      : ''
                  }
                  onChange={event => setPassword(event?.target?.value?.trim())}
                />
              </Form.Field>

              <Form.Field
                className={registerStyles.topSpacing}
                error={showPasswordConfirmationError}
              >
                <LabeledInput
                  label="Confirm Password"
                  disabled={isLoading}
                  type={showPassword ? null : 'password'}
                  onBlur={validatePasswordConfirmation}
                  icon={showPassword ? 'eye slash' : 'eye'}
                  onIconClick={() => setShowPassword(!showPassword)}
                  errorMessage={
                    showPasswordConfirmationError
                      ? 'Passwords do not match'
                      : ''
                  }
                  onChange={event => {
                    setPasswordConfirmation(event?.target?.value?.trim());
                  }}
                />
              </Form.Field>
              {/* Here we show the error message if there's an error from the API */}
              {error && !isLoading && (
                <Message
                  error
                  header="Error creating account"
                  content="Sorry, there's been an error creating your account. Please try again. If the issue persists, please contact our support team at support@connectorlando.tech"
                />
              )}
              {/* Here we show the submit button. Note that we:
                    - disable the button if the form is loading or if the button is not enabled
                    - show a loading indicator if the form is loading
                    - onClick, we call the trigger function from the usePost hook to send the API call
              */}
              <Button
                color="blue"
                fluid
                className={cx(
                  registerStyles.continueButton,
                  registerStyles.capitalize
                )}
                disabled={!isSubmitButtonEnabled || isLoading}
                onClick={trigger}
                loading={isLoading}
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
        )}
      </main>
    </>
  );
}
