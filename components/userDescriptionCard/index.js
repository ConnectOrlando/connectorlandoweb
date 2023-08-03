import CardStyles from '@app/components/userDescriptionCard/userDescriptionCard.module.css';
import { Segment, Button } from 'semantic-ui-react';
import UserCard from '../userCard';

export function UserDescriptionCard({ userDescription }) {
  return (
    <Segment padded className={CardStyles.container}>
      <UserCard
        profileImage=""
        name="Camila Gonzalez"
        location={{
          street: '123 Main St',
          city: 'Winter Park',
          state: 'FL',
          zip: '32789',
        }}
      ></UserCard>
      <p className={CardStyles.userDescription}>{userDescription}</p>
      <Button
        compact
        color="blue"
        className={
          CardStyles.button
        } /*will use propStyles to define as string*/
      >
        More Info
      </Button>
    </Segment>
  );
}
