import React, { InputHTMLAttributes } from 'react';
import styles from '@/styles/Components.module.css';
import {
  Box,
  Flex,
  Input as CustomInput,
  InputProps,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props extends InputProps {
  error?: Record<any, string>;
  label?: string;
  register?: any;
}

const Input: React.FC<Props> = ({ error, label, register, ...props }) => {
  const bg = useColorModeValue('brand.neutral.100', 'brand.secondary');
  return (
    <Box className={styles.form_control}>
      <label htmlFor={props.name}>{label}</label>
      <CustomInput
        className={styles.input}
        {...props}
        {...register}
        bg={bg}
        border={'none'}
        _active={{
          borderColor: '#FFB223',
        }}
      />
      {error ? (
        <Flex
          gap={2}
          mt={1}
          sx={{
            p: 2,
            borderRadius: 4,
            fontSize: '0.8rem',
            background: 'rgba(254, 235, 225, 0.15)',
            color: '#EB6969',
          }}
        >
          Error...
        </Flex>
      ) : null}
    </Box>
  );
};

export default Input;
