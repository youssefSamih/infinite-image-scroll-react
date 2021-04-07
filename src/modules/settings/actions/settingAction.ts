import { Dispatch } from 'react';
import { SAVE_SETTING, SettingActionTypes } from '../reducer/settingReducer';

export const SaveSettingData = (
  dispatch: Dispatch<SettingActionTypes>,
  data: any
) => dispatch({ data, type: SAVE_SETTING });
