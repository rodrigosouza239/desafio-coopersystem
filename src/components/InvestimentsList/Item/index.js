import React from 'react';

import {
  Container,
  ContainerTitle,
  ContainerValue,
  Title,
  SubTitle,
  Value,
} from './styles';

export default function Item({ itemData }) {
  const {
    nome: title,
    objetivo: subTitle,
    saldoTotalDisponivel: value,
  } = itemData;

  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ContainerTitle>
      <ContainerValue>
        <Value>
          {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </Value>
      </ContainerValue>
    </Container>
  );
}
