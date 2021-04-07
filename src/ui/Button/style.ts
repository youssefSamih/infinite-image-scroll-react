import { ElementType } from 'react';
import styled from 'styled-components';

export interface StyledButtonProps {
  inactive?: boolean;
  size?: 'large' | 'small' | 'medium';
  variant?: 'secondary' | 'primary';
  state?: string;
  type?: string;
  as?: ElementType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  letter-spacing: 0.1rem;
  font-size: 0.8125em;
  font-weight: bold;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ size }) => {
    switch (size) {
      case 'large':
        return `
					padding: 1.344rem 4.4rem;
				`;
      case 'small':
        return `
					padding: 0.5rem 2.1rem;
					`;
      default:
        return `
					padding: 0.8rem 3.4rem;
				`;
    }
  }}

  ${({
    variant,
    inactive,
    state,
    disabled,
    theme: {
      colors: { white, grey, stateColors, primary, secondary },
    },
  }) => {
    switch (variant) {
      case 'secondary':
        return inactive
          ? `color: ${grey[200]};
					background-color: transparent;
					border: ${grey[200]} 1px solid;
					`
          : `
				color: ${
          state && stateColors[state] ? stateColors[state].main : secondary.main
        };
				background-color: transparent;
				border: ${
          state && stateColors[state] ? stateColors[state].main : secondary.main
        } 1px solid;

				&:hover {
					color: ${
            state && stateColors[state]
              ? stateColors[state].light
              : secondary.light
          };
					border-color: ${
            state && stateColors[state]
              ? stateColors[state].light
              : secondary.light
          };
				}

				&:active {
					color: ${
            state && stateColors[state]
              ? stateColors[state].dark
              : secondary.dark
          };
					border-color: ${
            state && stateColors[state]
              ? stateColors[state].dark
              : secondary.dark
          };                    }`;
      default:
        return inactive
          ? `
						color: ${white};
						background-color: ${grey[200]};
						border: 1px solid transparent;
						`
          : `
						border: 1px solid transparent;
						color: ${white};
						background-color: ${
              state && stateColors[state]
                ? stateColors[state].main
                : primary.main
            };
						&:hover {
								${
                  !disabled &&
                  `
									background-color: ${
                    state && stateColors[state]
                      ? stateColors[state].light
                      : primary.light
                  };
									`
                }
						}
						&:active {
								background-color: ${
                  state && stateColors[state]
                    ? stateColors[state].dark
                    : primary.dark
                };
						}
				`;
    }
  }}
`;
