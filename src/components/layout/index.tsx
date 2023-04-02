import React from 'react';
import { TopNav } from '@/components';
import Wrapper from '../hoc/Wrapper';

interface Props {
  children: React.ReactElement;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};

export default Wrapper(Layout);
