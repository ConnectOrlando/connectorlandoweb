import BusinessProfileStyles from '@app/components/businessProfileCard/business_profile.module.css';
import { Label, Header, Segment } from 'semantic-ui-react';
import _ from 'lodash-es';
import PropTypes from 'prop-types';

BusinessProfileCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default function BusinessProfileCard({ imageUrl, name, category }) {
  if (_.isEmpty(name)) {
    throw new Error('Component requires business name');
  }

  let titleFontSize = 25;
  const words = name.split(' ');
  for (const word of words) {
    if (word.length > 7) {
      const extraChars = name.length - 7;
      const sizeDecrease = extraChars * 2;
      titleFontSize -= sizeDecrease;
    }
    if (titleFontSize < 15) {
      titleFontSize = 16;
      break;
    }
  }
  return (
    <Segment className={BusinessProfileStyles.container}>
      <img
        className={BusinessProfileStyles.businessImage}
        src={
          _.isEmpty(imageUrl) ? '/images/emptyProfilePicture.jpeg' : imageUrl
        }
        alt="Business Profile Picture"
      />
      <Header
        size="medium"
        style={{ fontSize: `${titleFontSize}px` }}
        className={BusinessProfileStyles.businessName}
      >
        {name}
      </Header>
      <Label
        color="blue"
        horizontal
        className={BusinessProfileStyles.businessType}
      >
        {category}
      </Label>
    </Segment>
  );
}
