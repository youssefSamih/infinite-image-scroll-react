import React from 'react';
import { Wrapper } from './style';
import GlobalStyle from 'theme/global-style';
import Header from 'ui/Header';

interface LayoutProps {
  Component?: React.FC;
}

const Layout: React.FC<LayoutProps> = ({ children, Component }) => {
  return (
    <>
      <GlobalStyle />
      <Header>{Component && <Component />}</Header>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
