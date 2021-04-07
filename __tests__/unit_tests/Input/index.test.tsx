import '@testing-library/jest-dom/extend-expect';

import { fireEvent } from '@testing-library/react';
import { useState } from 'react';
import Input from 'ui/Input';
import { render } from 'utils/test-utils';

const InputTest = () => {
  const [, setState] = useState('');
  const _onChange = (val: any) => {
    setState(val);
  };
  return (
    <Input
      id="input-test"
      name="input-test"
      type="text"
      label="input-test"
      placeholder="input-test"
      required={false}
      onChange={_onChange}
    />
  );
};

describe('Ui_Input', () => {
  test('should render Input and checks if visible', async () => {
    const { getByTestId } = render(<InputTest />);

    fireEvent.change(getByTestId('input-id'), {
      target: { value: 'hello world' },
    });
    expect(getByTestId('input-id')).toBeVisible();
    expect(
      ((getByTestId('input-id') as unknown) as { value: string }).value
    ).toBe('hello world');
  });
});
