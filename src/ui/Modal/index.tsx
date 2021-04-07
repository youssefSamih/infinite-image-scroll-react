import React from 'react';
import Popup from 'reactjs-popup';
import { Details, TextItem } from 'ui/sharedStyles';
import { ModalContent } from './style';

interface ModalPropsData {
  children: any;
  data: {
    location: {
      city: string;
      state: string;
      postcode: number;
      street: {
        number: number;
        name: string;
      };
    };
    phone: string;
    cell: string;
  };
}

const Modal = ({ children, data }: ModalPropsData) => {
  return (
    <Popup trigger={children} modal>
      <ModalContent>
        <Details>
          <TextItem>
            <span> Street </span>
            <span>
              {data.location.street.number} {data.location.street.name}
            </span>
          </TextItem>
          <TextItem>
            <span> City </span>
            <span>{data.location.city}</span>
          </TextItem>
          <TextItem>
            <span> State </span>
            <span>{data.location.state}</span>
          </TextItem>
          <TextItem>
            <span> Postcode </span>
            <span>{data.location.postcode}</span>
          </TextItem>
          <TextItem>
            <span> Phone </span>
            <span>{data.phone}</span>
          </TextItem>
          <TextItem>
            <span> Cell </span>
            <span>{data.cell}</span>
          </TextItem>
        </Details>
      </ModalContent>
    </Popup>
  );
};

export default Modal;
