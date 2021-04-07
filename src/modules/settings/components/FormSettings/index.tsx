import React from 'react';
import SelectInput from 'ui/SelectInput';
import { FormSettingsContainer } from './style';
import optionsData from './options.json';
import Button from 'ui/Button';

const FormSettings = () => {
  const [value, setState] = React.useState('');
  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setState(e.target.value);
  };
  return (
    <FormSettingsContainer>
      <SelectInput width={650} {...{ value, onChange }}>
        <option value="">--Please choose country--</option>
        {optionsData.map((val) => (
          <option value={val.value} key={val.value}>
            {val.label}
          </option>
        ))}
      </SelectInput>
      <Button>Save</Button>
    </FormSettingsContainer>
  );
};

export default FormSettings;
