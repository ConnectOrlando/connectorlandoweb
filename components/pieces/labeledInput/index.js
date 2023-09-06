import labeledInputStyles from '@app/components/pieces/labeledInput/labeledInput.module.css';
import { Input, Label } from 'semantic-ui-react';
import _ from 'lodash-es';

export default function LabeledInput({
  label,
  placeholder,
  description = '',
  type = '',
  errorMessage = '',
  disabled = false,
  onChange = null,
  onBlur = null,
  icon = '',
  onIconClick = null,
}) {
  if (label == null || label === '') {
    throw new Error('Component requires label');
  }
  if (!type) {
    type = 'text';
  }

  return (
    <div>
      <label className={labeledInputStyles.label}>{label}</label>
      {description && (
        <p className={labeledInputStyles.description}>{description}</p>
      )}
      <Input
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        error={!_.isEmpty(errorMessage)}
        type={type}
        action={
          icon
            ? {
                icon,
                onClick: () => (onIconClick ? onIconClick() : null),
              }
            : null
        }
      />
      {errorMessage && (
        <Label basic color="red" size="small" pointing="above">
          {errorMessage}
        </Label>
      )}
    </div>
  );
}
