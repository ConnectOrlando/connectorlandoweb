import CardStyles from '@app/components/userDescriptionCard/userDescriptionCard.module.css';
import { Segment, Button } from 'semantic-ui-react';
import UserCard from '@app/components/UserCard';
import PropTypes from 'prop-types';

UserDescriptionCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    location: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export function UserDescriptionCard({ user }) {
  const { name, profileImage, location } = user;
  const cardInfo = { name, profileImage, location };

  const { description } = user;
  return (
    <Segment padded className={CardStyles.container}>
      <UserCard {...cardInfo}></UserCard>
      <p className={CardStyles.userDescription}> {description} </p>
      <Button compact color="blue" className={CardStyles.button}>
        More Info
      </Button>
    </Segment>
  );
}
