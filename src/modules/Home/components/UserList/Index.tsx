import React from 'react';
import { Flex } from 'react-flex-ready';
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
  }[];
}

const UserList = ({ data }: UserListProps) => {
  return (
    <UserListContainer>
      <Flex>
        {data.map((val) => {
          return <Card {...val} />;
        })}
      </Flex>
    </UserListContainer>
  );
};

export default UserList;
