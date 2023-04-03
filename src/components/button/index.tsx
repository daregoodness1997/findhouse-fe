import React from 'react';
import { Button as CustomButton, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  label: string;
}

const Button: React.FC<Props> = ({ label, ...props }) => {
  return <CustomButton {...props}>{label}</CustomButton>;
};

export default Button;
