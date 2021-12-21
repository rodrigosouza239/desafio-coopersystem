import React, { useState } from 'react';

import Modal from 'react-native-modal';

import {
  Container,
  Title,
  ContainerContentModal,
  Desc,
  ButtonRescue,
  ButtonRescueText,
} from './styles';

export default function CustomModal({ visible = false, handleModalClick }) {
  return (
    <Container>
      <Modal isVisible={visible}>
        <ContainerContentModal>
          <Title>RESGATE EFETUADO</Title>
          <Desc>O valor solicitado está em sua conta em até 5 dias úteis!</Desc>
        </ContainerContentModal>
        <ButtonRescue onPress={handleModalClick}>
          <ButtonRescueText>NOVO RESGATE</ButtonRescueText>
        </ButtonRescue>
      </Modal>
    </Container>
  );
}
