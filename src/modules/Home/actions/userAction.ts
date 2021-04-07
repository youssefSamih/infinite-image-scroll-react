import { Dispatch } from 'react';
import { SAVE_USER_LIST, UserActionTypes } from '../reducer/userReducer';

export const SaveDataUser = (dispatch: Dispatch<UserActionTypes>, data: any) =>
  dispatch({ data, type: SAVE_USER_LIST });
