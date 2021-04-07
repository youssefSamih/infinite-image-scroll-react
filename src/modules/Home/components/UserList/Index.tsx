import { SaveDataUser } from 'modules/Home/actions/userAction';
import { useUserData } from 'modules/Home/provider/UserProvider';
import { useSettingData } from 'modules/settings/provider/SettingProvider';
import React from 'react';
import { Flex } from 'react-flex-ready';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import api from 'service/api';
import Card from 'ui/Card';
import { Loading, LoadingText, UserListContainer } from './style';

interface UserListProps {
  data: {
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
}

const UserList = ({ data }: UserListProps) => {
  const { state, dispatch } = useUserData();
  const { state: settingState } = useSettingData();
  React.useEffect(() => {
    SaveDataUser(dispatch, {
      userList: data,
      page: state.page + 1,
      hasNextPage: true,
      loading: false,
    });
    if (settingState.country !== '' && settingState.country !== null) {
      getData(settingState.country, 1);
    }
  }, []);
  const getData = (nat?: string, page?: number) => {
    SaveDataUser(dispatch, {
      ...state,
      loading: true,
    });
    api
      .get(
        `/?page=${page ? page : state.page}&results=20&${
          nat ? 'nat=' + nat : ''
        }`
      )
      .then((res) => {
        const oldUserList = state.userList ? [...state.userList] : [];
        SaveDataUser(dispatch, {
          ...state,
          userList: [...oldUserList, ...res.data.results],
          page: state.page + 1,
          hasNextPage: oldUserList.length <= res.data.results,
          loading: false,
        });
      });
  };
  const [infiniteRef] = useInfiniteScroll({
    loading: state.loading,
    hasNextPage: state.hasNextPage,
    onLoadMore: getData,
    rootMargin: '0px 0px 400px 0px',
  });
  return (
    <UserListContainer>
      <Flex>
        {state.userList?.map((val: any, i) => {
          return (
            <Card
              key={`${val.id.value}${val.name.first}`}
              {...{ ...val, id: i + 2 }}
            />
          );
        })}
      </Flex>
      <Loading ref={infiniteRef}>
        <LoadingText load={!state.loading}>Loading...</LoadingText>
      </Loading>
    </UserListContainer>
  );
};

export default UserList;
