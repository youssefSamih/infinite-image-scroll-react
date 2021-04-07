import { InputProps } from 'interfaces';
import React from 'react';
import { Label, SelectContainer, SelectStyle } from './style';

const SelectInput: React.FC<InputProps> = ({ children, label, width }) => {
  return (
    <SelectContainer width={width}>
      {label && <Label>{label}</Label>}
      <SelectStyle>{children}</SelectStyle>
    </SelectContainer>
  );
};

export default SelectInput;
