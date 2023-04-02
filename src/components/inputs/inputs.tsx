import React, { InputHTMLAttributes } from 'react';
import styles from '@/styles/Components.module.css';
import { Input as CustomInput, InputProps } from '@chakra-ui/react';

interface Props extends InputProps {
  error?: Record<any, string>;
  label?: string;
}

const Input: React.FC<Props> = ({ error, label, ...props }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={props.name}>{label}</label>
      <CustomInput className={styles.input} {...props} />
      {error ? <div></div> : null}
    </div>
  );
};

export default Input;
