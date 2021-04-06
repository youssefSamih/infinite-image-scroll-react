import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  border-radius: 3px;
  margin-top: 1rem;

  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.div`
  padding: 0.2rem 0;
  text-align: center;

  a {
    font-size: 1.125em;
    color: ${({ theme }) => theme.colors.black[500]};
    margin: 0.83em 0;
    display: block;
  }
`;

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
