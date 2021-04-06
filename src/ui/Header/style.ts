import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.white};
`;
