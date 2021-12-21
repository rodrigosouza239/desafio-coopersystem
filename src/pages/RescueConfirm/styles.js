import styled from 'styled-components/native';
import colors from '~/styles/colors';

import { lighten } from 'polished';

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

export const Container = styled.ScrollView`
  background: #e0dede;
  flex: 1px;
`;

export const ButtonRescue = styled.TouchableOpacity`
  background: ${(props) =>
    props.disabled ? lighten(0.1, colors.accent) : colors.accent};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
`;

export const ButtonRescueText = styled.Text`
  text-transform: uppercase;
  color: ${colors.secondary};
  font-size: 18px;
  font-weight: bold;
`;
