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
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  width?: number;
}

export interface CardProps {
  id: string;
  picture: {
    large?: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  email: string;
  location: {
    city: string;
    state: string;
    postcode: number;
    street: {
      number: number;
      name: string;
    };
  };
  phone: string;
  cell: string;
}
