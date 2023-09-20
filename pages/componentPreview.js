/**
 * Note: This is a test page to test components.
 * It is not:
 * - used in the app
 * - linked to from any other page
 * - linked to from the navigation
 * - linked to from the footer
 * - linked to from the sitemap
 * - linked to from the robots.txt
 */
import ComponentPreviewStyles from '@app/styles/componentPreview.module.css';
import { useRouter } from 'next/router';
import { hideHeader } from '@app/utilities/pageUtilities';
import { useMantineColorScheme } from '@mantine/core';
import { Button } from 'semantic-ui-react';

/**
 * Don't forget to import your component here!
 * For example:
 *   import Logo from '@app/components/logo';
 */
import Logo from '@app/components/logo';

export default function ComponentPreview() {
  checkForOrigin(useRouter());
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <h1 className={ComponentPreviewStyles.title}>Component Preview</h1>
      <Button
        inverted={colorScheme === 'dark'}
        color={colorScheme === 'dark' ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        icon={colorScheme === 'dark' ? 'sun' : 'moon'}
        content={colorScheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        className={ComponentPreviewStyles.themeToggle}
      />
      <p className={ComponentPreviewStyles.subtitle}>
        This shows you how your component will look when used in a vacuum. There
        is no outside CSS or HTML to affect it.
      </p>
      <main className={ComponentPreviewStyles.container}>
        {/* ▼▼▼▼▼▼▼ Insert component in here ▼▼▼▼▼▼▼ */}

        <Logo />

        {/* ▲▲▲▲▲▲▲ Insert component in here ▲▲▲▲▲▲▲ */}
      </main>
      {hideHeader()}
    </>
  );
}

function checkForOrigin(router) {
  if (typeof window === 'undefined') {
    return;
  }
  if (
    window.location?.origin?.includes('localhost') ||
    window.location?.origin?.includes('ngrok')
  ) {
    return;
  }
  router.push('/');
}
