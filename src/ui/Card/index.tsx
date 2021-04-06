import React from 'react';
import { Item } from 'react-flex-ready';
import Picture from 'ui/Picture';
import { CardContainer, Details, TextItem, Title } from './style';

interface CardProps {
  picture: {
    large?: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  email: string;
}

const Card = ({ picture, name, login, email }: CardProps) => {
  return (
    <CardContainer as={Item} col={3} colTablet={6} colMobile={12} gap={2}>
      <Title>
        {name.first} {name.last}
      </Title>
      <Picture uri={picture?.large} height="14rem" />
      <Details>
        <TextItem>
          <span>Full name</span>
          <span>
            {name.first} {name.last}
          </span>
        </TextItem>
        <TextItem>
          <span>user name</span>
          <span>{login.username}</span>
        </TextItem>
        <TextItem>
          <span>Email</span>
          <span>{email}</span>
        </TextItem>
      </Details>
    </CardContainer>
  );
};

export default Card;
