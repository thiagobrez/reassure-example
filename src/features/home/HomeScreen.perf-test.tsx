import React from 'react';
import {measurePerformance} from 'reassure';
import {screen, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from '../../utils/navigation';
import DetailsScreen from '../details/DetailsScreen';
import HomeScreen from './HomeScreen';

const component = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

test('Simple test', async () => {
  await measurePerformance(component);
}, 15000);

test('Test with scenario', async () => {
  const scenario = async () => {
    fireEvent.press(screen.getByText(/item 0/i));
    await screen.findByText(/details for item 0/i);
  };

  await measurePerformance(component, {scenario});
});
