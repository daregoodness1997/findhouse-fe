import React from 'react';
import {
  Button as CustomButton,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const bgPrimary = useColorModeValue(
    'button.primary.main',
    'button.primary.main'
  );
  const bgPrimaryHover = useColorModeValue(
    'button.primary.hover',
    'button.primary.hover'
  );
  const bgSecondary = useColorModeValue('brand.neutral.200', 'brand.secondary');
  const bgSecondaryHover = useColorModeValue(
    'brand.neutral.300',
    'button.secondary'
  );
  return (
    <CustomButton
      background={variant === 'primary' ? bgPrimary : bgSecondary}
      _hover={{
        background: variant === 'primary' ? bgPrimaryHover : bgSecondaryHover,
      }}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
