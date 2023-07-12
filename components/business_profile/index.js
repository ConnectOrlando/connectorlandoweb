import BusinessProfileStyles from '@app/components/business_profile/business_profile.module.css';
import { Label } from 'semantic-ui-react';

export default function BusinessProfileCard({ url, businessName, category }) {
  if (url == null) {
    throw new Error('Component requires url');
  }
  if (businessName == null) {
    throw new Error('Component requires business name');
  }
  if (category == null) {
    throw new Error('Component requires business category');
  }
  return (
    <div className={BusinessProfileStyles.container}>
      <img className={BusinessProfileStyles.businessImage} src={url} />
      <h1 className={BusinessProfileStyles.businessName}>{businessName}</h1>
      <Label
        color="blue"
        horizontal
        className={BusinessProfileStyles.businessType}
      >
        {category}
      </Label>
    </div>
  );
}
