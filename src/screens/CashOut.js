import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from '../theme/typography';

export default function CashOut() {
  return (
    <LinearGradient
      colors={['#2B0552', '#7600EB', '#2B0552']} // Gradient colors
      locations={[0, 0.5, 1]} // Positions: Top, Middle, Bottom
      style={styles.container} // Apply gradient to the entire screen
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.content}>
        <Text style={styles.text}>Under Development</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen coverage
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
