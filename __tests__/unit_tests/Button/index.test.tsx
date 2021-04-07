import { fireEvent } from '@testing-library/react';
import React from 'react';
import Button from 'ui/Button';
import { render } from 'utils/test-utils';

const ButtonTest = ({ onClick = () => {} }) => (
  <Button type="submit" data-testid="test-button" onClick={onClick}>
    BUTTON
  </Button>
);

describe('Ui_Button', () => {
  test('should render Button and checks if visible', async () => {
    const fn = jest.fn();
    const { getByTestId } = render(<ButtonTest onClick={fn()} />);

    fireEvent.doubleClick(getByTestId('test-button'));
    expect(getByTestId('test-button')).toBeVisible();
    expect(fn).toHaveBeenCalled();
  });
});
