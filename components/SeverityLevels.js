import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const SeverityLevels = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('SeverityLevels');

  const handlePress = (page) => {
    console.log(`Navigating to ${page} page`);
    navigation.navigate(page);
    setActiveButton(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What are the Severity Levels of Chondromalacia Patella?</Text>
      </View>

      <View style={styles.levelsContainer}>
        <View style={styles.level}>
          <Text style={styles.levelTitle}>Level 1</Text>
          <Text style={styles.levelDescription}>
            This is the least severe level, where the cartilage slowly diminishes.
          </Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelTitle}>Level 2</Text>
          <Text style={styles.levelDescription}>
            This is the level where the cartilage slowly diminishes, and it becomes much more prevalent.
          </Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelTitle}>Level 3</Text>
          <Text style={styles.levelDescription}>
            Starts the degeneration of the cartilage tissue.
          </Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.levelTitle}>Level 4</Text>
          <Text style={styles.levelDescription}>
            Severe deterioration of the tissue cartilage, bones are exposed and may come into contact with each other. It is important to see a professional.
          </Text>
        </View>
      </View>

      {/* Bottom buttons */}
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
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? 'rgba(0, 255, 0, 0.3)' : 'green' },
          ]}
          onPress={() => handlePress('TestScreen')}  // Change 'TestScreen' to the actual test screen name
        >
          <Text style={styles.buttonText}>Test Screen</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 20,
  },
  levelsContainer: {
    marginBottom: 40,
    flex: 1,
  },
  level: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  levelDescription: {
    lineHeight: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 0, // Ensure left alignment
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SeverityLevels;