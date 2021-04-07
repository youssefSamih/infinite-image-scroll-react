import React from 'react';
import SelectInput from 'ui/SelectInput';
import { FormSettingsContainer } from './style';
import optionsData from './options.json';
import Button from 'ui/Button';
import { useSettingData } from 'modules/settings/provider/SettingProvider';
import { SaveSettingData } from 'modules/settings/actions/settingAction';

const FormSettings = () => {
  const { state, dispatch } = useSettingData();
  const [value, setState] = React.useState(state.country);
  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setState(e.target.value);
  };
  const Save = () => {
    SaveSettingData(dispatch, {
      country: value,
    });
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
      <Button onClick={Save}>Save</Button>
    </FormSettingsContainer>
  );
};

export default FormSettings;
