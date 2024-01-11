import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SeverityLevels from './components/SeverityLevels';
<<<<<<< HEAD
import Help from './components/SeverityLevels'; // Using SeverityLevels as Help for simplicity
import Instructions from './components/Instructions';
import Results from './components/Results';
=======
import Instructions from './components/Instructions';
import Results from './components/Results';
import KneeReader from './components/KneeReader';
import TestScreen from './components/TestScreen';
>>>>>>> cb6e391e04157fe41dde67347edfdb195ed4ab1c

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SeverityLevels">
        <Stack.Screen name="SeverityLevels" component={SeverityLevels} />
<<<<<<< HEAD
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="Results" component={Results} />
=======
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="KneeReader" component={KneeReader} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
>>>>>>> cb6e391e04157fe41dde67347edfdb195ed4ab1c
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;