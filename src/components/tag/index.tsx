import { Box, Tag as CustmTag, TagProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends TagProps {
  label: string;
  Icon?: React.ReactElement;
}

const Tag: React.FC<Props> = ({ label, ...props }) => {
  return (
    <CustmTag
      size={'lg'}
      borderRadius={24}
      px={4}
      cursor='pointer'
      background={'transparent'}
      fontWeight='light'
      {...props}
    >
      {label}
    </CustmTag>
  );
};

export default Tag;
