import { SaveDataUser } from 'modules/Home/actions/userAction';
import { useUserData } from 'modules/Home/provider/UserProvider';
import React from 'react';
import Input from 'ui/Input';

const SearchInput = () => {
  const { state, dispatch } = useUserData();
  const olUserList = [...(state?.userList as [])];
  const [value, setState] = React.useState('');
  const onChange = (e: { target: { value: string } }) => {
    setState(e.target.value);
    if (e.target.value !== '' && e.target.value !== null) {
      const newUserList = state.userList?.filter(
        (val) =>
          val.name.first.includes(e.target.value) ||
          val.name.last.includes(e.target.value)
      );
      SaveDataUser(dispatch, {
        userList: newUserList,
        hasNextPage: false,
        loading: false,
      });
    } else {
      SaveDataUser(dispatch, {
        userList: olUserList,
        hasNextPage: true,
        loading: false,
      });
    }
  };

  return (
    <Input placeholder="Search user" width={650} {...{ onChange, value }} />
  );
};

export default SearchInput;
