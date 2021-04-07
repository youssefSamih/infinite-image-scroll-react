import { ChangeEvent } from 'react';

export interface InputContainerProps {
  width?: number;
}

export interface InputProps {
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
