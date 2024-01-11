// Results.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Results = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('Results');

  const handlePress = (page) => {
    console.log(`Navigating to ${page} page`);
    navigation.navigate(page);
    setActiveButton(page);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results Page</Text>
      {/* Add your results content here */}

      {/* Bottom buttons for navigation */}
      <View style={styles.bottomContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'rgba(0, 0, 255, 0.3)' : activeButton === 'Help' ? 'blue' : 'white' },
          ]}
          onPress={() => handlePress('Help')}
        >
          <Text style={styles.buttonText}>Help</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'rgba(0, 0, 255, 0.3)' : activeButton === 'Instructions' ? 'blue' : 'white' },
          ]}
          onPress={() => handlePress('Instructions')}
        >
          <Text style={styles.buttonText}>Instructions</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'rgba(0, 0, 255, 0.3)' : activeButton === 'Results' ? 'blue' : 'white' },
          ]}
          onPress={() => handlePress('Results')}
        >
          <Text style={styles.buttonText}>Results</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Results;
