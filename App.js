import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import DailyPicScreen from './screens/DailyPicScreen';
import SpaceCraftsScreen from './screens/SpaceCraftsScreen';
import StarMapScreen from './screens/StarMapScreen';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigation
        initialRouteName="Home"
        screenOption={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigation>
    </NavigationContainer>
  );
}
