/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from '../theme/typography';
import SpinWheelPack from '../commen/SpinWheelPack';
import ModalScreen from '../commen/ModalScreen';

const {width, height} = Dimensions.get('window'); // Get full screen size

export default function Home() {
  const [winnerValue, setWinnerValue] = useState(null);
  const [disablePress, setDisablePress] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Rotation Animation (Looping)
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 6000, // Speed of rotation
        useNativeDriver: true,
      }),
    );

    // Zoom Animation (Scale Up → Scale Down)
    const zoomAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1, // Zoom in
          duration: 1500, // Slow in
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Smoothly return to normal
          duration: 1500, // Slow out
          useNativeDriver: true,
        }),
      ]),
    );

    // Start both animations
    rotateAnimation.start();
    zoomAnimation.start();
  }, []);

  // Interpolating rotation (0deg → 360deg)
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <LinearGradient
        colors={['#2B0552', '#7600EB', '#7600EB', '#7600EB', '#2B0552']}
        locations={[0, 0.3, 0.5, 0.7, 1]}
        style={styles.container}
        start={{x: 0, y: 10}}
        end={{x: 1, y: 0}}>
        <View style={styles.content}>
          <View style={styles.coinView}>
            <Image
              source={require('../assets/images/rupees.png')}
              style={styles.tenRsImg}
            />
            <Text style={styles.rsText}>₹10.00</Text>
          </View>
          <Image
            source={require('../assets/images/indicator.png')}
            style={styles.indicatorImg}
          />

          <Text style={styles.onlyCashTxt}>Only ₹10.00 to cash out</Text>

          {/* Rotating and Scaling Image */}
          <View>
            <Animated.Image
              source={require('../assets/images/turnBB.png')}
              style={[
                styles.bubble,
                {
                  transform: [
                    {rotateZ: rotation}, // Rotate continuously
                    {scale: scaleAnim}, // Add smooth zoom effect
                  ],
                },
              ]}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}>
              <SpinWheelPack
                setWinnerValue={setWinnerValue}
                disablePress={disablePress}
                setDisablePress={setDisablePress}
              />
            </View>
          </View>
        </View>
      </LinearGradient>

      <ModalScreen
        visible={winnerValue ? true : false}
        data="This is a modal message!"
        onClose={() => {
          setWinnerValue(null);
          setDisablePress(false);
        }}
        dataValues={winnerValue}
      />
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  result: {fontSize: 20, color: 'white'},
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  bubble: {
    width: width * 1.1,
    height: height * 0.45,
  },
  indicatorImg: {
    width: width * 0.79,
    resizeMode: 'contain',
  },
  onlyCashTxt: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: typography.Bold,
    color: '#FFFFFF',
  },
  coinView: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tenRsImg: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  rsText: {
    fontSize: 25,
    fontFamily: typography.Bold,
    color: '#FD9C05',
  },
});
