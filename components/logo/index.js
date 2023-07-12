import LogoStyles from '@app/components/logo/logo.module.css';

export default function Logo({ size }) {
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
    <img
      className={LogoStyles.logo}
      src="/images/samsunglogo.png"
      width={width}
      alt="Connect Orlando Logo"
    />
  );
}
