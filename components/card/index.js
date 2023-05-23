import CardStyles from '@app/components/card/Card.module.css';

export default function Card({
  image,
  name,
  subtitle,
  location,
  savedConnections,
  savedBusiness,
}) {
  if (name == null) {
    throw new Error('Card component requires name');
  }
  if (location == null) {
    throw new Error('Card component requires location');
  }
  return (
    <div className={CardStyles.cardContainer}>
      <img className={CardStyles.roundedImage} src={image} />
      <h1 className={CardStyles.name}>{name}</h1>
      <p className={CardStyles.subtitle}>{subtitle}</p>
      <p className={CardStyles.location}>{location}</p>
      <button className={CardStyles.button}>Click me</button>
      <div className={CardStyles.userSaves}>
        <div className={CardStyles.stat}>
          <p className={CardStyles.number}>{savedConnections}</p>
          <p className={CardStyles.label}>{'Saved Connections'}</p>
        </div>
        <div className={CardStyles.stat}>
          <p className={CardStyles.number}>{savedBusiness}</p>
          <p className={CardStyles.label}>{'Saved Businesses'}</p>
        </div>
      </div>
      <button className={CardStyles.button}>Click me</button>
    </div>
  );
}
