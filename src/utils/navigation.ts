import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
  };
};

export const Stack = createNativeStackNavigator<RootStackParamList>();
