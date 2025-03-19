import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from '../theme/typography';
import ModalScreen from '../commen/ModalScreen';

export default function MoreSpin() {
  const [spinValue, setSpinValue] = useState(false); // Initially hidden

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#2B0552', '#7600EB', '#7600EB', '#7600EB', '#2B0552']} // Dark on sides, light in middle
        locations={[0, 0.3, 0.5, 0.7, 1]} // Darker on edges, lightest at center
        style={styles.container} // Apply gradient to the entire screen
        start={{x: 0, y: 10}} // Start from left
        end={{x: 1, y: 0}} // End at right
      >
        <View style={styles.content}>
          <Text style={styles.text}>Under Development</Text>
          {/* <Button onPress={() => setSpinValue(true)} title="Show Modal" /> */}
        </View>
      </LinearGradient>

      {/* Modal should be outside the gradient */}
      <ModalScreen
        visible={spinValue}
        data="This is a modal message!"
        onClose={() => setSpinValue(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen
  },
  gradient: {
    flex: 1, // Ensure it covers the full screen
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: typography.ExtraBold,
  },
});
