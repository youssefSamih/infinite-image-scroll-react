import styled from 'styled-components';

interface LoadingTextProps {
  loading: boolean;
}
export const UserListContainer = styled.div`
  padding-top: 3rem;
  max-width: 1280px;
  margin: 0px auto;
  width: 80%;
`;

export const Loading = styled.div`
  height: '100px';
  margin: '30px';
`;

export const LoadingText = styled.span<LoadingTextProps>`
  display: ${({ loading }) => (loading ? 'block' : 'none')};
`;
