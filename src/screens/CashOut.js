import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from '../theme/typography';
import SpinWheelSpin from '../commen/SpinWheelSpin';
import SpinWheelPack from '../commen/SpinWheelPack';

export default function CashOut() {
  return (
    <>
      {/* <LinearGradient
        colors={['#2B0552', '#7600EB', '#7600EB', '#7600EB', '#2B0552']} // Dark on sides, light in middle
        locations={[0, 0.3, 0.5, 0.7, 1]} // Darker on edges, lightest at center
        style={styles.container} // Apply gradient to the entire screen
        start={{x: 0, y: 10}} // Start from left
        end={{x: 1, y: 0}} // End at right
      > */}
      <View style={styles.content}>
        {/* <Text style={styles.text}>Under Development</Text> */}
        {/* <SpinWheelSpin /> */}
        <SpinWheelPack />
      </View>
      {/* </LinearGradient> */}
    </>
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
    // backgroundColor: 'pink',
  },
  text: {
    color: 'white',
    fontSize: 28,
    fontFamily: typography.ExtraBold,
  },
});
