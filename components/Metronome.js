// Metronome.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(82);
  const [countdown, setCountdown] = useState(3); // Initial countdown seconds
  const [duration, setDuration] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const playClick = async () => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(require('./tick.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  const startMetronome = () => {
    // Calculate interval in milliseconds
    const interval = (60 / bpm) * 1000;

    // Countdown before starting
    setCountdown(3); // Set initial countdown value
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Start the metronome after countdown
    setTimeout(() => {
      clearInterval(countdownInterval);
      const startTime = Date.now(); // Record the start time

      const id = setInterval(() => {
        playClick();
        const elapsedTime = (Date.now() - startTime) / 1000; // Calculate elapsed time
        setDuration(elapsedTime); // Update duration
      }, interval);

      setIntervalId(id);
      setIsPlaying(true);
    }, 3000); // Set the countdown duration in milliseconds
  };

  const stopMetronome = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsPlaying(false);
    setDuration(0); // Reset duration when stopped
    setCountdown(3); // Reset countdown when stopped
  };

  useEffect(() => {
    // Stop the metronome after at least 6 seconds
    if (duration >= 6 && isPlaying) {
      stopMetronome();
    }
  }, [duration, isPlaying]);

  useEffect(() => {
    return () => {
      // Clean up interval when the component unmounts
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <View>
      <Text>BPM: {bpm}</Text>
      {countdown > 0 && !isPlaying && <Text>{`Starting in ${countdown} seconds...`}</Text>}
      {duration >= 6 && isPlaying && <Text>Metronome will stop after 6 seconds...</Text>}
      <Button
        title={isPlaying ? 'Stop' : 'Start'}
        onPress={() => (isPlaying ? stopMetronome() : startMetronome())}
      />
    </View>
  );
};

export default Metronome;
