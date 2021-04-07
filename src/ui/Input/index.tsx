import { InputProps } from 'interfaces';
import React from 'react';
import { InputContainer, InputStyle, Label } from './style';

const Input = ({
  name,
  type,
  placeholder,
  required,
  label,
  autocomplete,
  onChange,
  width,
}: InputProps) => {
  return (
    <InputContainer {...{ width }}>
      {label && <Label>{label}</Label>}
      <InputStyle
        id={name}
        aria-label={label}
        {...{ name, type, placeholder, required, autocomplete, onChange }}
      />
    </InputContainer>
  );
};

export default Input;
