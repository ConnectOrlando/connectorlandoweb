import labeledInputStyles from '@app/components/pieces/labeledInput/labeledInput.module.css';

export default function LabeledInput({ label, placeholder }) {
  if (label == null) {
    throw new Error('Component requires label');
  }
  if (placeholder == null) {
    throw new Error('Component requires placeholder');
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
