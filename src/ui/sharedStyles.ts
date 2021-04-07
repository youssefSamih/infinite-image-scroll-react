import styled from 'styled-components';

export const Details = styled.div`
  padding: 1rem 2rem;

  span {
    font-size: 0.87em;
  }
`;

export const TextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-top: 1px solid #efefef;

  span {
    color: ${({ theme }) => theme.colors.black[300]};

    &:last-child {
      color: ${({ theme }) => theme.colors.grey[400]};
    }
  }
`;
