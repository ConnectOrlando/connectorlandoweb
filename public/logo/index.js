import LogoStyles from '@app/public/logo/logo.module.css';
import Image from 'next/image';

export default function Logo({ width }) {
  if (width == null) {
    throw new Error('Component requires width');
  }
  return (
    <Image
      className={LogoStyles.logo}
      src={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'
      }
      width={width ?? 200}
      height={0} /*set to auto in css file*/
      alt={'Logo'}
    />
  );
}
