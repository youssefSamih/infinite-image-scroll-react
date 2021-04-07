import React, { useState } from 'react';
import Select from 'ui/SelectInput';
import { fireEvent, render, screen } from 'utils/test-utils';

const options = [
  {
    key: 'choice1',
    label: 'Choice 1',
  },
  {
    key: 'choice2',
    label: 'Choice 2',
  },
];
const TestSelect = () => {
  const [option, setOption] = useState('');
  return (
    <form>
      <label htmlFor="option">Choices</label>
      <Select
        placeholder="Pick a choice"
        onChange={(e: any) => setOption(e.target.value)}
        name="option"
        label="Choices"
      >
        {options.map((op) => (
          <option value={op.key} key={op.key}>
            {op.label}
          </option>
        ))}
      </Select>
      <p data-testid="chosen-option">{option}</p>
    </form>
  );
};

describe('Select', () => {
  test('should render Select, see if all options are visible and pick an item', async () => {
    const { getByTestId } = render(<TestSelect />);
    fireEvent.change(getByTestId('option'), {
      target: { value: 'choice2' },
    });
    expect(screen.getByTestId('chosen-option')).toHaveTextContent('choice2');
  });
});
