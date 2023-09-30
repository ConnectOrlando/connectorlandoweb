import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import '@app/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Logo from '@app/components/logo';
import { Button, Menu, Header, Segment, Divider } from 'semantic-ui-react';
import { createStyles, Group, Burger, Drawer, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

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
}));

export default function App(props) {
  const { Component, pageProps } = props;
  const state = { activeItem: 'home' };
  const router = useRouter();
  const navigateToPage = (e, { name }) => router.push(`/${name}`);

  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const toggleColorScheme = value => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>ConnectOrlando</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Segment basic className="noMargin" id="global-nav">
            <Group position="apart" sx={{ height: '100%' }} px={120}>
              <Logo size="small" />
              <Menu
                pointing
                secondary
                className={classes.hiddenMobile}
                inverted={colorScheme === 'dark'}
              >
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
              <Drawer.Title className="bold">
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
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
