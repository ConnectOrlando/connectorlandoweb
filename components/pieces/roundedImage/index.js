import RoundedImageStyles from '@app/components/pieces/roundedImage/roundedImage.module.css';

export default function RoundedImage({ url, alt, size }) {
  if (url == null) {
    throw new Error('Component requires image');
  }
  return (
    <img
      className={RoundedImageStyles.round}
      src={url}
      width={size ?? 200}
      height={size ?? 200}
      alt={alt ?? 'Rounded image'}
    />
  );
}
