import BusinessProfileStyles from '@app/components/business_profile/business_profile.module.css';
import Image from 'next/image';

export default function BusinessProfileCard() {
  return (
    <div className={BusinessProfileStyles.container}>
      <Image
        className={BusinessProfileStyles.businessImage}
        src={'https://picsum.photos/300'}
        width={180}
        height={180}
        alt={'Business image'}
      />
      <h1 className={BusinessProfileStyles.businessName}>Business Name</h1>
      <button className={BusinessProfileStyles.businessType}>Restaurant</button>
    </div>
  );
}
