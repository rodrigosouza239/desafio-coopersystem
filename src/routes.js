import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import colors from '~/styles/colors';

import InvestimentsList from '~/pages/InvestimentsList';
import RescueConfirm from '~/pages/RescueConfirm';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InvestimentsList"
          options={() => {
            return {
              headerTitle: 'Resgate',
              headerTintColor: colors.primary,
              headerStyle: {
                backgroundColor: colors.secondary,
              },
            };
          }}
          component={InvestimentsList}
        />
        <Stack.Screen
          name="RescueConfirm"
          options={() => {
            return {
              headerTitle: 'Resgate',
              headerTintColor: colors.primary,
              headerStyle: {
                backgroundColor: colors.secondary,
              },
            };
          }}
          component={RescueConfirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
