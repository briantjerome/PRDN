// TestScreen.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import KneeReader from './KneeReader'; // Update the path based on your project structure
import { useNavigation } from '@react-navigation/native';

const TestScreen = () => {
  const navigation = useNavigation();

  const startKneeReading = () => {
    // Navigate to the KneeReader screen
    navigation.navigate('KneeReader');
  };

  return (
    <View style={styles.container}>
      <Text>This is the Test Screen</Text>
      
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'rgba(0, 0, 255, 0.3)' : 'blue' },
        ]}
        onPress={startKneeReading}
      >
        <Text style={styles.buttonText}>Start Knee Reading</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TestScreen;
