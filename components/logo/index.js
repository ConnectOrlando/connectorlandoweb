import LogoStyles from '@app/components/logo/logo.module.css';
import Image from 'next/image';

export default function Logo({ size }) {
  if (size == null) {
    throw new Error('Component requires size: "small," "medium," or "large" ');
  }
  let width;
  switch (size) {
    case 'small': {
      width = 100;
      break;
    }
    case 'medium': {
      width = 200;
      break;
    }
    case 'large': {
      width = 300;
      break;
    }
    default: {
      width = 200;
    }
  }

  return (
    <Image
      className={LogoStyles.logo}
      src={'/images/samsunglogo.png'}
      width={width}
      height={0} /*set to auto in css file*/
      alt={'Connect Orlando Logo'}
    />
  );
}
