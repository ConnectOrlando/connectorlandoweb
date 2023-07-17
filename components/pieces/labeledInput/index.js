import labeledInputStyles from '@app/components/pieces/labeledInput/labeledInput.module.css';

export default function LabeledInput({ label, placeholder }) {
  if (label == null || label === '') {
    throw new Error('Component requires label');
  }

  return (
    <div>
      <label className={labeledInputStyles.label}>{label}</label>
      <input
        className={labeledInputStyles.placeholder}
        placeholder={placeholder}
      />
    </div>
  );
}
