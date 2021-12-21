import React, { useState, useEffect } from 'react';

import {
  InfoContainer,
  Title,
  Desc,
  ContainerStocks,
  RescueContainer,
  RescueContainerTitle,
  RescueInputContainer,
  RescueInputTextCoin,
  RescueInput,
  RescueErrorText,
} from './styles';

import { useSelector, useDispatch } from 'react-redux';

export default function RescueItem({ rescueData, total }) {
  const formattedValue = (
    Math.round(rescueData.percentual * total) / 100
  ).toLocaleString('pt-br', { minimumFractionDigits: 2 });

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    `O Valor resgatado tem que ser menor ou igual a ${formattedValue}`,
  );

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  function handleChangeRescueValue(rescueValue) {
    setValue(rescueValue);
  }

  useEffect(() => {
    let valid = false;

    if (
      parseFloat(value.toString().replace('.', '').replace(',', '.')) >
      Math.round(rescueData.percentual * total) / 100
    ) {
      setErrorStatus(true);
      valid = false;
    } else {
      setErrorStatus(false);
      valid = true;
    }

    dispatch({
      type: 'UPDATE_STOCKS',
      stock: {
        ...rescueData,
        value: parseFloat(value.toString().replace('.', '').replace(',', '.')),
        valid,
      },
    });
  }, [value]);

  return (
    <ContainerStocks>
      <InfoContainer>
        <Title>Ação</Title>
        <Desc testeID="rescueName">{rescueData.nome}</Desc>
      </InfoContainer>
      <InfoContainer>
        <Title>Saldo acumulado</Title>
        <Desc>{formattedValue}</Desc>
      </InfoContainer>
      <RescueContainer>
        <RescueContainerTitle>Valor a resgatar</RescueContainerTitle>
        <RescueInputContainer>
          <RescueInputTextCoin>R$</RescueInputTextCoin>
          <RescueInput
            autoCorrect={false}
            autoCapitalize="none"
            type="money"
            onChangeText={handleChangeRescueValue}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: '',
              suffixUnit: '',
            }}
            value={value}
          />
        </RescueInputContainer>
        {errorStatus && <RescueErrorText>{errorMessage}</RescueErrorText>}
      </RescueContainer>
    </ContainerStocks>
  );
}
