import { ElementType, forwardRef, ReactNode } from 'react';

import { StyledButton, StyledButtonProps } from './style';

type ButtonProps = {
  children: ReactNode;
  as?: ElementType;
  type?: string;
  size?: 'large' | 'small' | 'medium';
  onClick?: (e?: any) => void;
  disabled?: boolean;
} & StyledButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, type, onClick, inactive, disabled, ...rest }, ref) => (
    <StyledButton
      {...rest}
      as={as}
      disabled={inactive || disabled}
      inactive={inactive}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
);

export default Button;
