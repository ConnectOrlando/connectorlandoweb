import LogoStyles from '@app/components/logo/logo.module.css';

export default function Logo({ size }) {
  let width;

  switch (size) {
    case 'small': {
      width = 150;
      break;
    }
    case 'medium': {
      width = 250;
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
      src="/images/logo3.png"
      width={width}
      alt="Connect Orlando Logo"
    />
  );
}
