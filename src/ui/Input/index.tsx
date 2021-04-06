import React, { ChangeEvent } from 'react';
import { InputContainer, InputStyle, Label } from './style';

interface InputProps {
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  width?: number;
}

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
