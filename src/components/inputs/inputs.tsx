import React, { InputHTMLAttributes } from 'react';
import styles from '@/styles/Components.module.css';
import {
  Input as CustomInput,
  InputProps,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props extends InputProps {
  error?: Record<any, string>;
  label?: string;
}

const Input: React.FC<Props> = ({ error, label, ...props }) => {
  const bg = useColorModeValue('brand.neutral.100', 'brand.secondary');
  return (
    <div className={styles.form_control}>
      <label htmlFor={props.name}>{label}</label>
      <CustomInput
        className={styles.input}
        {...props}
        bg={bg}
        border={'none'}
        _active={{
          borderColor: '#FFB223',
        }}
      />
      {error ? <div></div> : null}
    </div>
  );
};

export default Input;
