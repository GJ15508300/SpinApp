import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window'); // Get full screen size

export default function Home() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000, // Speed of rotation
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 0.49],
    outputRange: ['0deg', '360deg'], // Full clockwise rotation
  });

  return (
    <>
      <LinearGradient
        colors={['#2B0552', '#7600EB', '#7600EB', '#7600EB', '#2B0552']} // Dark on sides, light in middle
        locations={[0, 0.3, 0.5, 0.7, 1]} // Darker on edges, lightest at center
        style={styles.container} // Apply gradient to the entire screen
        start={{x: 0, y: 10}} // Start from left
        end={{x: 1, y: 0}} // End at right
      >
        <View style={styles.content}>
          <Image
            source={require('../assets/images/tenRs.png')}
            style={styles.tenRsImg}
          />

          <Image
            source={require('../assets/images/indicator.png')}
            style={styles.indicatorImg}
          />
          {/* Fixed Image, Only Rotating Clockwise */}
          <Animated.Image
            source={require('../assets/images/turn1.png')} // Your single image
            style={[
              styles.bubble,
              {
                transform: [{rotateZ: rotation}], // Only rotates in place
              },
            ]}
          />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  tenRsImg: {
    width: 137.87185668945312,
    height: 42,
  },
  bubble: {
    // flex: 1,
    width: width * 0.8, // Image size based on screen width
    height: height * 0.4, // Image height
    resizeMode: 'contain', // Keeps the aspect ratio
    // backgroundColor: 'red',
    // alignSelf: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  indicatorImg: {
    width: width * 0.79,
    resizeMode: 'contain',
    // marginBottom: 10,
  },
});
