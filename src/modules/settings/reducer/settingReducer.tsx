export type SettingState = {
  country?: string;
};

export const SAVE_SETTING = 'SAVE_SETTING';

export type SettingActionTypes = {
  type: 'SAVE_SETTING';
  data: {
    country?: string;
  };
};

const country =
  typeof localStorage !== 'undefined' && localStorage.getItem('@country');

export const INITIAL_STATE: SettingState = {
  country: country ? country : '',
};

const settingReducer = (
  state: SettingState,
  action: SettingActionTypes
): SettingState => {
  switch (action.type) {
    case SAVE_SETTING:
      return {
        ...state,
        ...action.data,
      };
    default:
      return INITIAL_STATE;
  }
};

export default settingReducer;
