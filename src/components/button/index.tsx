import React from 'react';
import {
  Button as CustomButton,
  ButtonProps,
  useColorModeValue,
} from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  Icon?: React.ReactElement;
}

const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  Icon,
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
  const bgSecondary = useColorModeValue('brand.neutral.300', 'brand.secondary');
  const bgSecondaryHover = useColorModeValue(
    'brand.neutral.200',
    'brand.secondary'
  );

  const colorPrimary = useColorModeValue(
    'brand.neutral.100',
    'brand.neutral.100'
  );
  const colorSecondary = useColorModeValue(
    'brand.secondary',
    'brand.neutral.100'
  );
  return (
    <CustomButton
      background={variant === 'primary' ? bgPrimary : bgSecondary}
      _hover={{
        background: variant === 'primary' ? bgPrimaryHover : bgSecondaryHover,
      }}
      color={variant === 'primary' ? colorPrimary : colorSecondary}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
      {...props}
    >
      {Icon}
      {children}
    </CustomButton>
  );
};

export default Button;
