import UserProfileStyles from '@app/components/userCard/userCard.module.css';
import { Segment, Header, Image } from 'semantic-ui-react';
import _ from 'lodash-es';

export default function UserCard({ profileImage, name, location }) {
  if (!_.isString(name) || _.isEmpty(name)) {
    throw new Error('Component requires user name');
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

  const shouldShowComma =
    !_.isEmpty(location.city) && !_.isEmpty(location.state);

  return (
    <Segment className={UserProfileStyles.container}>
      <Image
        className={UserProfileStyles.userImage}
        alt="User profile picture"
        circular
        src={
          _.isEmpty(profileImage)
            ? '/images/emptyProfilePicture.jpeg'
            : profileImage
        }
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
          {location.city}
          {shouldShowComma ? ', ' : ''}
          {location.state}
        </p>
      </div>
    </Segment>
  );
}
