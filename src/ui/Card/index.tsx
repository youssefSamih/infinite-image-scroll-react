import { CardProps } from 'interfaces';
import React from 'react';
import { Item } from 'react-flex-ready';
import Modal from 'ui/Modal';
import Picture from 'ui/Picture';
import { Details, TextItem } from 'ui/sharedStyles';
import { CardContainer, Title } from './style';

const Card = ({ id, picture, name, login, email, ...rest }: CardProps) => {
  return (
    <Modal data={rest}>
      <CardContainer
        as={Item}
        col={3}
        colTablet={6}
        colMobile={12}
        gap={2}
        tabIndex={id}
      >
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
    </Modal>
  );
};

export default Card;
