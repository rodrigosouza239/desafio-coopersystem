import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CustomModal from '~/components/CustomModal';

import {
  Container,
  InfoContainer,
  Title,
  Desc,
  ButtonRescue,
  ButtonRescueText,
} from './styles';
import ListHeader from '~/components/InvestimentsList/Header';

import RescueItem from '~/components/RescueConfirm/RescueItem';

export default function RescueConfirm({ route, navigation }) {
  const investData = route.params;
  const dispatch = useDispatch();

  const { stocks } = useSelector((state) => state.rescue);
  const [total, setTotal] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let totalStock = 0;
    let valid = true;
    stocks.map((stock) => {
      totalStock += stock.value;
      if (!stock.valid) {
        valid = false;
      }
    });

    setButtonDisabled(!valid || totalStock <= 0);
    setTotal(totalStock);
  }, [stocks]);

  useEffect(() => {
    dispatch({
      type: 'SET_STOCKS',
      stocks: investData.acoes.map((stock) => {
        return {
          ...stock,
          value: 0,
          valid: true,
        };
      }),
    });
  }, []);

  return (
    <Container>
      <CustomModal
        visible={modalVisible}
        handleModalClick={() => {
          setModalVisible(!modalVisible);
          navigation.goBack();
        }}
      />
      <ListHeader leftTitle="Dados do investimento" rightTitle="" />
      <InfoContainer>
        <Title>Nome</Title>
        <Desc>{investData.nome}</Desc>
      </InfoContainer>
      <InfoContainer>
        <Title>Saldo total disponível</Title>
        <Desc>
          {investData.saldoTotalDisponivel.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Desc>
      </InfoContainer>
      <ListHeader
        leftTitle="Resgate do seu jeito"
        rightTitle=""
        renderBottomLine={false}
      />
      {investData.acoes.map((investItem) => (
        <RescueItem
          rescueData={investItem}
          total={investData.saldoTotalDisponivel}
        />
      ))}
      <InfoContainer>
        <Title>Valor total a resgatar</Title>
        <Desc>
          {total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </Desc>
      </InfoContainer>
      <ButtonRescue
        disabled={buttonDisabled}
        onPress={() => setModalVisible(true)}>
        <ButtonRescueText>CONFIRMAR RESGATE</ButtonRescueText>
      </ButtonRescue>
    </Container>
  );
}
