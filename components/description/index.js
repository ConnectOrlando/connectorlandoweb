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
  return (
    <Segment className={DescriptionStyles.container}>
      <div className={DescriptionStyles.header}>
        <h1 className={DescriptionStyles.title}>{title}</h1>
      </div>
      <div className={DescriptionStyles.bottom}>
        <Segment basic className={DescriptionStyles.text}>
          {text}
        </Segment>
      </div>
    </Segment>
  );
}
