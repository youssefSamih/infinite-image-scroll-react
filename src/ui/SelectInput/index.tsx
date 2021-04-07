import { InputProps } from 'interfaces';
import React from 'react';
import { Label, SelectContainer, SelectStyle } from './style';

const SelectInput: React.FC<InputProps> = ({
  children,
  label,
  width,
  name,
  placeholder,
  required,
  onChange,
  value,
}) => {
  return (
    <SelectContainer width={width}>
      {label && <Label>{label}</Label>}
      <SelectStyle
        id={name}
        aria-label={label}
        defaultValue={value}
        data-testid="option"
        {...{ name, placeholder, required, onChange, value }}
      >
        {children}
      </SelectStyle>
    </SelectContainer>
  );
};

export default SelectInput;
