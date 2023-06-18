import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '@app/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Logo from '@app/components/logo';
import { Button, Menu, Header, Segment, Divider } from 'semantic-ui-react';
import { createStyles, Group, Burger, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';

const useStyles = createStyles(theme => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none !important',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  mobileItem: {
    paddingLeft: `calc(${theme.spacing.md} * 2) !important`,
    paddingRight: `calc(${theme.spacing.md} * 2) !important`,
  },

  bold: {
    fontWeight: 700,
  },

  noMargin: {
    margin: `${0} !important`,
  },
}));

export default function App({ Component, pageProps }) {
  const state = { activeItem: 'home' };
  const router = useRouter();
  const navigateToPage = (e, { name }) => router.push(`/${name}`);

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>ConnectOlrando</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Segment basic className={classes.noMargin} id="global-nav">
          <Group position="apart" sx={{ height: '100%' }} px={120}>
            <Logo size="small" />
            <Menu pointing secondary className={classes.hiddenMobile}>
              <Menu.Item
                name="home"
                active={state.activeItem === 'home'}
                onClick={navigateToPage}
              />
              <Menu.Item
                name="investors"
                active={state.activeItem === 'investors'}
                onClick={navigateToPage}
              />
              <Menu.Item
                name="companies"
                active={state.activeItem === 'companies'}
                onClick={navigateToPage}
              />
            </Menu>

            <div className={classes.hiddenMobile}>
              <Button basic>Sign in</Button>
              <Button primary>Sign Up</Button>
            </div>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Segment>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          withCloseButton={false}
          className={classes.hiddenDesktop}
          zIndex={1_000_000}
          position="right"
          scrollAreaComponent={ScrollArea.Autosize}
        >
          <Drawer.Header>
            <Drawer.Title className={classes.bold}>
              <Header as="h2">Menu</Header>
            </Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Divider />

          <Menu stackable secondary>
            <Menu.Item
              name="home"
              active={state.activeItem === 'home'}
              onClick={navigateToPage}
              className={classes.mobileItem}
            />
            <Menu.Item
              name="investors"
              active={state.activeItem === 'investors'}
              onClick={navigateToPage}
              className={classes.mobileItem}
            />
            <Menu.Item
              name="companies"
              active={state.activeItem === 'companies'}
              onClick={navigateToPage}
              className={classes.mobileItem}
            />
          </Menu>

          <Divider />

          <Group position="center" grow pb="xl" px="md">
            <Button basic>Sign in</Button>
            <Button primary>Sign Up</Button>
          </Group>
        </Drawer>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
