// KneeReader.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { app } from '../firebaseconfig'; // Import the initialized app

const KneeReader = () => {
  const [sensorData, setSensorData] = useState({
    VAG: '0.00',
    angle: '0.00',
    start: false,
  });

  useEffect(() => {
    const sensorDataRef = ref(getDatabase(app), '/sensorData');

    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      setSensorData(data || {});
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleKneeReading = () => {
    console.log('Initiating Knee Reading...');
    
    // Simulate updating the sensor data in the Firebase Realtime Database
    const newSensorData = {
      VAG: '1.23', // Update with actual sensor readings
      angle: '45.67', // Update with actual sensor readings
      start: true,
      additionalData1: 'Some value',
      additionalData2: 'Another value',
      // Add more properties as needed
    };

    const sensorDataRef = ref(getDatabase(app), '/sensorData');
    set(sensorDataRef, newSensorData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sensor Data:</Text>
      <Text>VAG: {sensorData.VAG}</Text>
      <Text>Angle: {sensorData.angle}</Text>
      <Text>Start: {sensorData.start ? 'true' : 'false'}</Text>

      <View style={styles.dataContainer}>
        <Text>Additional Data 1: {sensorData.additionalData1}</Text>
        <Text>Additional Data 2: {sensorData.additionalData2}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'rgba(0, 0, 255, 0.3)' : 'blue' },
        ]}
        onPress={handleKneeReading}
      >
        <Text style={styles.buttonText}>Start Knee Reading</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dataContainer: {
    marginTop: 20,
  },
});

export default KneeReader;
