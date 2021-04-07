import styled from 'styled-components';

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 300px;
  height: 300px;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5%;
`;
