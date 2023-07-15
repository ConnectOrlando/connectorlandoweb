import BusinessProfileStyles from '@app/components/business_profile/business_profile.module.css';
import { Label, Header, Segment } from 'semantic-ui-react';
import _ from 'lodash-es';

export default function BusinessProfileCard({
  imageUrl,
  businessName,
  category,
}) {
  if (!_.isString(imageUrl || _.isEmpty(imageUrl))) {
    throw new TypeError('Component requires business image');
  }
  if (!_.isString(businessName) || _.isEmpty(businessName)) {
    throw new Error('Component requires business name');
  }
  if (!_.isString(category) || _.isEmpty(category)) {
    throw new Error('Component requires business category');
  }
  let titleFontSize = 25;
  const words = businessName.split(' ');
  for (const word of words) {
    if (word.length > 7) {
      const extraChars = businessName.length - 7;
      const sizeDecrease = extraChars * 7;
      titleFontSize -= sizeDecrease;
    }
  }
  return (
    <Segment className={BusinessProfileStyles.container}>
      <img className={BusinessProfileStyles.businessImage} src={imageUrl} />
      <Header
        size="medium"
        style={{ fontSize: `${titleFontSize}px` }}
        className={BusinessProfileStyles.businessName}
      >
        {businessName}
      </Header>
      <Label
        color="pink"
        horizontal
        className={BusinessProfileStyles.businessType}
      >
        {category}
      </Label>
    </Segment>
  );
}
