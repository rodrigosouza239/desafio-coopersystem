import styled from 'styled-components/native';
import colors from '~/styles/colors';

import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerContentModal = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${darken(0.09, colors.secondary)};
`;

export const Desc = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${darken(0.03, colors.secondary)};
  padding-bottom: 30px;
`;

export const ButtonRescue = styled.TouchableOpacity`
  background: ${colors.accent};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const ButtonRescueText = styled.Text`
  text-transform: uppercase;
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: bold;
`;
