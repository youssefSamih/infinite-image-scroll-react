export type UserState = {
  userList?: {
    name: {
      first: string;
      last: string;
    };
    location: {
      street: string;
      city: string;
      state: string;
      postcode: string;
    };
    email: string;
    login: {
      username: string;
    };
    phone: string;
    cell: string;
    picture: {
      large: string;
    };
    id: {
      value: string;
    };
  }[];
  loading: boolean;
  page: number;
  hasNextPage: boolean;
};

export const SAVE_USER_LIST = 'SAVE_USER_LIST';

export type UserActionTypes = {
  type: 'SAVE_USER_LIST';
  data: {
    userList: any;
    loading: boolean;
    page: number;
    hasNextPage: boolean;
  };
};

export const INITIAL_STATE: any = {
  userList: [],
  loading: false,
  page: 1,
  hasNextPage: true,
};

const userReducer = (state: UserState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SAVE_USER_LIST:
      return {
        ...state,
        ...action.data,
      };
    default:
      return INITIAL_STATE;
  }
};

export default userReducer;
