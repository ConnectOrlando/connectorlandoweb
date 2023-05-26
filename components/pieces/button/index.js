import ButtonStyles from '@app/components/pieces/button/button.module.css';

export default function Button({ text, alt }) {
  if (text == null) {
    throw new Error('Component requires text.');
  }
  return (
    <button className={ButtonStyles.button} alt={alt ?? 'Button'}>
      {text}
    </button>
  );
}
