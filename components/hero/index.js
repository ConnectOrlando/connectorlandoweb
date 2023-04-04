import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from '@mantine/core';
import Link from 'next/link';

export default function Hero({
  title1,
  title2,
  subtitle,
  buttonText,
  buttonLink,
}) {
  const { classes } = useStyles();
  validateProps({ title1, title2, subtitle, buttonText, buttonLink });
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'red', to: 'yellow' }}
              >
                {title1}
              </Text>

              {title2 && ` ${title2}`}
            </Title>
            {subtitle && (
              <Text className={classes.description} mt={30}>
                {subtitle}
              </Text>
            )}

            {buttonText && buttonLink && (
              <Link href={buttonLink}>
                <Button
                  variant="gradient"
                  gradient={{ from: 'red', to: 'yellow' }}
                  size="xl"
                  className={classes.control}
                  mt={40}
                >
                  {buttonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

function validateProps(props) {
  const { title1, buttonText, buttonLink } = props;
  if (!title1) {
    throw new Error('Hero component requires title1 prop');
  }

  if (buttonText && !buttonLink) {
    throw new Error('Hero component requires buttonLink prop');
  }

  if (buttonLink && !buttonText) {
    throw new Error('Hero component requires buttonText prop');
  }
}

const useStyles = createStyles(theme => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    marginRight: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: theme.fontFamily,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: theme.fontFamily,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));
