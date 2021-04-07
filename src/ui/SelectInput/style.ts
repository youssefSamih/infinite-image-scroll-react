import { InputContainerProps } from 'interfaces';
import styled from 'styled-components';

export const SelectStyle = styled.select`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  padding: 0.5rem 1rem;
  border-radius: 2px;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.grey[700]};
  text-align: left;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  border: 1px solid transparent;

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary.main}`};
  }

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }

  &::-moz-placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[700]};
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 0.5rem 0;
  line-height: 1.33;
  font-size: 0.93em;
  width: 15%;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => `${theme.colors.grey[700]}`};
`;

export const SelectContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`;
