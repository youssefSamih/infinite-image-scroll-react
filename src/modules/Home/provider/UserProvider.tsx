import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import userReducer, {
  UserActionTypes,
  UserState,
  INITIAL_STATE,
} from '../reducer/userReducer';

const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserActionTypes>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);

export default UserProvider;
