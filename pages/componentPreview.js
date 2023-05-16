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
/**
 * Don't forget to import your component here!
 * For example:
 *   import Card from '@app/components/card';
 */
import Card from '@app/components/card';

export default function ComponentPreview() {
  return (
    <>
      <h1 className={ComponentPreviewStyles.title}>Component Preview</h1>
      <p className={ComponentPreviewStyles.subtitle}>
        This shows you how your component will look when used in a vacuum. There
        is no outside CSS or HTML to affect it.
      </p>
      <main className={ComponentPreviewStyles.container}>
        {/* ▼▼▼▼▼▼▼ Insert component in here ▼▼▼▼▼▼▼ */}

        <Card></Card>

        {/* ▲▲▲▲▲▲▲ Insert component in here ▲▲▲▲▲▲▲ */}
      </main>
    </>
  );
}