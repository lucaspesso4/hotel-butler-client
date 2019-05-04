import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Screens
import HomeScreen from './screens/HomeScreen';
import SelectServiceScreen from './screens/SelectServiceScreen';
import FoodServiceScreen from './screens/FoodServiceScreen';
import FoodServiceConfirmationScreen from './screens/FoodServiceConfirmationScreen';
import RoomServiceScreen from './screens/RoomServiceScreen';
import RoomServiceConfirmationScreen from './screens/RoomServiceConfirmationScreen.js';

// Navigation
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  SelectService: { screen: SelectServiceScreen },
  RoomService: { screen: RoomServiceScreen },
  FoodService: { screen: FoodServiceScreen },
  RoomConfirmation: { screen: RoomServiceConfirmationScreen },
  FoodConfirmation: { screen: FoodServiceConfirmationScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
