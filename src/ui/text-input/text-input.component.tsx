import { AllHTMLAttributes, VFC } from 'react';

import styles from './text-input.module.scss';
import { Props } from './text-input.types';

export const TextInput: VFC<Props> = ({
  name,
  type = 'text',
  inputmode = 'text',
  disabled,
  readonly,
  value,
  onChange,
  label,
  placeholder,
}) => {
  const attributes: AllHTMLAttributes<HTMLInputElement> = {
    name,
    placeholder,
    disabled,
    readOnly: readonly,
    inputMode: inputmode,
    value,
    onChange,
  };

  return (
    <div className={styles.input}>
      {label && <label htmlFor={name}>{label}</label>}

      <input type={type} {...attributes} />
    </div>
  );
};
