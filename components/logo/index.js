import LogoStyles from '@app/components/logo/logo.module.css';
import PropTypes from 'prop-types';
import { useMantineColorScheme } from '@mantine/core';

Logo.propTypes = {
  size: PropTypes.string,
};

export default function Logo({ size }) {
  const { colorScheme } = useMantineColorScheme();
  let logoUrl = '';

  if (colorScheme === 'light') {
    logoUrl = '/images/logo.png';
  } else if (colorScheme === 'dark') {
    logoUrl = '/images/logoDarkMode.png';
  }

  let width;

  switch (size) {
    case 'small': {
      width = 150;
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
      src={logoUrl}
      width={width}
      alt="Connect Orlando Logo"
    />
  );
}
