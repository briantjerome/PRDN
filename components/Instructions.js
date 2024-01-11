import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Dimensions, ScrollView, Pressable } from 'react-native';
import SlideIndicator from './SlideIndicator';
import Metronome from './Metronome'; // Import the Metronome component

const instructions = [
  'Extend your knee from 90 degrees all the way to 0 degrees',
  'Raise your knee twice, within the 8-second time frame. There are two intervals, so hold tight!',
  'If you\'re ready, press start and the device will start to read your knee condition, hold still',
];

const Instructions = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeButton, setActiveButton] = useState('Instructions');
  const [showMetronome, setShowMetronome] = useState(false); // State for showing Metronome
  const { width, height } = Dimensions.get('window');
  const containerSize = Math.min(width, height) - 40; // Container size as the minimum of width and height
  const widthOfSingleSlide = width;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const offsetX = gestureState.dx;
      const newSlideIndex = Math.round(offsetX / widthOfSingleSlide);
      setCurrentSlideIndex(newSlideIndex);

      // Show Metronome on the last slide
      if (newSlideIndex === instructions.length - 1) {
        setShowMetronome(true);
      } else {
        setShowMetronome(false);
      }
    },
  });

  const handlePress = (page) => {
    console.log(`Navigating to ${page} page`);
    navigation.navigate(page);
    setActiveButton(page);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <ScrollView
          horizontal
          style={[styles.scrollContainer, { width: containerSize, height: containerSize }]}
          contentContainerStyle={styles.scrollContentContainer}
          {...panResponder.panHandlers}
        >
          {instructions.map((instruction, index) => (
            <View key={index} style={styles.slide}>
              <Text>{instruction}</Text>
            </View>
          ))}

          {showMetronome && (
            <Pressable
              style={styles.metronomeButton}
              onPress={() => console.log('Metronome button pressed')}
            >
              <Metronome />
            </Pressable>
          )}
        </ScrollView>
        <SlideIndicator numberOfSlides={instructions.length} currentSlideIndex={currentSlideIndex} style={styles.slideIndicator} />
      </View>

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
    backgroundColor: 'white',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    backgroundColor: '',
  },
  scrollContentContainer: {
    alignItems: 'center',
  },
  metronomeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  slide: {
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  slideIndicator: {
    marginTop: 10,
    marginBottom: 20, // Adjusted margin for SlideIndicator
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

export default Instructions;
