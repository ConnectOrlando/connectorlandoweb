import DescriptionStyles from '@app/components/description/description.module.css';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash-es';

Description.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default function Description({ title, text }) {
  if (_.isEmpty(title)) {
    throw new Error('Component requires title');
  }

  let titleFontSize = 25;
  const words = title.split(' ');
  for (const word of words) {
    if (word.length > 5) {
      const extraChars = title.length - 5;
      const sizeDecrease = extraChars * 2;
      titleFontSize -= sizeDecrease;
    }
  }
  return (
    <Segment className={DescriptionStyles.container}>
      <div className={DescriptionStyles.left}>
        <h1
          className={DescriptionStyles.title}
          style={{ fontSize: `${titleFontSize}px` }}
        >
          {title}
        </h1>
      </div>
      <div className={DescriptionStyles.right}>
        <Segment basic className={DescriptionStyles.text}>
          {text}
        </Segment>
      </div>
    </Segment>
  );
}
