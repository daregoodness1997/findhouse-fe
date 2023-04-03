import React from 'react';
import { Button as CustomButton, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <CustomButton
      background={variant === 'primary' ? 'brand.primary' : 'gray.100'}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
