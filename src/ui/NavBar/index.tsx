import React from 'react';
import { NavbarContainer, ContentContainer, Option } from './style';
import Link from 'next/link';

const NavBar: React.FC = ({ children }) => {
  return (
    <NavbarContainer>
      <Link href="/">
        <Option>Settings</Option>
      </Link>
      <ContentContainer>{children}</ContentContainer>
    </NavbarContainer>
  );
};

export default NavBar;
