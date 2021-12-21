import styled from 'styled-components/native';

import { TextInputMask } from 'react-native-masked-text';

export const ContainerStocks = styled.View`
  margin-bottom: 20px;
`;

import colors from '~/styles/colors';

export const InfoContainer = styled.View`
  background: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
  margin-top: 2px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Desc = styled.Text`
  font-size: 16px;
`;

export const RescueContainer = styled.View`
  background: ${colors.primary};
  flex-direction: column;
  padding: 10px 10px;
  margin-top: 2px;
`;

export const RescueContainerTitle = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const RescueInputContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const RescueInputTextCoin = styled.Text`
  font-size: 18px;
`;

export const RescueInput = styled(TextInputMask)`
  margin-top: -10px;
  padding-bottom: -10px;
  flex: 1;
  border-bottom-width: 1;
  border-bottom-color: #ccc;
`;

export const RescueErrorText = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: red;
`;
