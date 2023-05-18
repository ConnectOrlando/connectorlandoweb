import RoundedImageStyles from '@app/components/pieces/roundedImage/roundedImage.module.css';

export default function RoundedImage({ image }) {
  if (image == null) {
    throw new Error('Component requires image');
  }
  return <img className={RoundedImageStyles.round} src={image} />;
}
