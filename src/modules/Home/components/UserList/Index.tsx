import React from 'react';
import { Flex } from 'react-flex-ready';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import api from 'service/api';
import Card from 'ui/Card';
import { UserListContainer } from './style';

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
  const [state, setState] = React.useState({
    userList: data,
    loading: false,
    page: 1,
    hasNextPage: true,
  });
  const loadMore = () => {
    setState({ ...state, loading: true });
    api.get(`/?page=${state.page}&results=20`).then((res) => {
      setState({
        ...state,
        userList: [...state.userList, ...res.data.results],
        page: state.page + 1,
        hasNextPage: state.userList.length <= res.data.results,
        loading: false,
      });
    });
  };
  const [infiniteRef] = useInfiniteScroll({
    loading: state.loading,
    hasNextPage: state.hasNextPage,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 400px 0px',
  });
  const loadingCSS = {
    height: '100px',
    margin: '30px',
  };
  const loadingTextCSS = { display: state.loading ? 'block' : 'none' };
  return (
    <UserListContainer>
      <Flex>
        {state.userList.map((val) => {
          return <Card key={`${val.id.value}${val.name.first}`} {...val} />;
        })}
      </Flex>
      <div ref={infiniteRef} style={loadingCSS}>
        <span style={loadingTextCSS}>Loading...</span>
      </div>
    </UserListContainer>
  );
};

export default UserList;
