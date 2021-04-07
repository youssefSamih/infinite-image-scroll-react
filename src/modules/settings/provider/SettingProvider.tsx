import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import settingReducer, {
  SettingActionTypes,
  SettingState,
  INITIAL_STATE,
} from '../reducer/settingReducer';

const SettingContext = createContext<{
  state: SettingState;
  dispatch: Dispatch<SettingActionTypes>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const SettingProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(settingReducer, INITIAL_STATE);

  return (
    <SettingContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export const useSettingData = () => useContext(SettingContext);

export default SettingProvider;
