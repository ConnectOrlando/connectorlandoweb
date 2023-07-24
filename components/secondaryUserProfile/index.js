import UserProfileStyles from '@app/components/secondaryUserProfile/secondaryUserProfile.module.css';
import { Segment, Header, Image } from 'semantic-ui-react';
import _ from 'lodash-es';

export default function SecondaryUserProfile({ profileImage, name, location }) {
  if (!_.isString(profileImage || _.isEmpty(profileImage))) {
    throw new TypeError('Component requires a profile picture');
  }
  if (!_.isString(name) || _.isEmpty(name)) {
    throw new Error('Component requires user name');
  }
  if (!_.isString(location) || _.isEmpty(location)) {
    throw new Error('Component requires a location');
  }
  let titleFontSize = 11;
  let subtitleFontSize = 8;
  const words = name.split(' ');
  for (const word of words) {
    if (word.length > 7) {
      const extraChars = name.length - 7;
      const sizeDecrease = extraChars * 2;
      titleFontSize -= sizeDecrease;
    }
    if (titleFontSize < 9) {
      titleFontSize = 9;
      subtitleFontSize = 7;
      break;
    }
  }
  return (
    <Segment className={UserProfileStyles.container}>
      <Image
        className={UserProfileStyles.userImage}
        alt="User profile picture"
        circular
        src={profileImage}
      />
      <div className={UserProfileStyles.right}>
        <Header
          className={UserProfileStyles.userName}
          style={{ fontSize: `${titleFontSize}px` }}
        >
          {name}
        </Header>
        <p
          className={UserProfileStyles.location}
          style={{ fontSize: `${subtitleFontSize}px` }}
        >
          {location}
        </p>
      </div>
    </Segment>
  );
}
