import Head from 'next/head';
import registerStyles from '@app/styles/register.module.css';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import cx from 'classnames';
import LabeledInput from '@app/components/pieces/labeledInput';
import { useState, useEffect } from 'react';
import { usePost } from 'swirl-react';
import { Urls } from '@app/constants/urls';
import _ from 'lodash-es';
import validator from 'validator';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordConfirmationError, setShowPasswordConfirmationError] =
    useState(false);

  const isSubmitButtonEnabled =
    !_.isEmpty(name) &&
    isEmailValid() &&
    isPasswordValid() &&
    isPasswordConfirmationValid();

  const { data, error, isLoading, trigger } = usePost({
    url: `${Urls.API}/auth/signup`,
    body: {
      name,
      email,
      password,
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

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
              <LabeledInput
                label="Name"
                disabled={isLoading}
                onChange={event => setName(event?.target?.value?.trim())}
              />
            </Form.Field>

            <Form.Field error={showEmailError}>
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
              <LabeledInput
                label="Password"
                description="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                type={showPassword ? null : 'password'}
                disabled={isLoading}
                onBlur={validatePassword}
                icon={showPassword ? 'eye slash' : 'eye'}
                onIconClick={() => setShowPassword(!showPassword)}
                errorMessage={
                  showPasswordError ? 'Password does not meet requirements' : ''
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
                  showPasswordConfirmationError ? 'Passwords do not match' : ''
                }
                onChange={event => {
                  setPasswordConfirmation(event?.target?.value?.trim());
                }}
              />
            </Form.Field>

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
      </main>
    </>
  );
}
