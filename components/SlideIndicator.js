import React from 'react';
import { View, StyleSheet } from 'react-native';

const SlideIndicator = ({ numberOfSlides, currentSlideIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfSlides }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            { backgroundColor: index === currentSlideIndex ? 'black' : 'gray' },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default SlideIndicator;