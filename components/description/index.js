import DescriptionStyles from '@app/components/description/description.module.css';
import { Segment } from 'semantic-ui-react';

export default function Description({ title, text }) {
  if (title == null) {
    throw new Error('Component requires title');
  }
  if (text == null) {
    throw new Error('Component requires text');
  }
  return (
    <div className={DescriptionStyles.container}>
      <div className={DescriptionStyles.left}>
        <h1 className={DescriptionStyles.title}> {title} </h1>
      </div>
      <div className={DescriptionStyles.right}>
        <Segment basic className={DescriptionStyles.text}>
          {text}
        </Segment>
      </div>
    </div>
  );
}
