import React from 'react';
import SelectInput from 'ui/SelectInput';
import { FormSettingsContainer } from './style';

const FormSettings = () => {
  return (
    <FormSettingsContainer>
      <SelectInput width={650}>
        <option value="">--Please choose an option--</option>
        <option value="ch">CH</option>
        <option value="es">ES</option>
        <option value="hamster">FR</option>
        <option value="hamster">GB</option>
      </SelectInput>
    </FormSettingsContainer>
  );
};

export default FormSettings;
