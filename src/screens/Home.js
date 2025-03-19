/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import SpinWheel from '../commen/SpinWheel';
// import ModalScreen from '../commen/ModalScreen';
import {typography} from '../theme/typography';
// import SpinWheelPack from '../commen/SpinWheelPack';

const {width, height} = Dimensions.get('window'); // Get full screen size

export default function Home() {
  const [spinValue, setSpinValue] = useState(false);
  const [data, setData] = useState('');
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // console.log('spinValue', spinValue);

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

  const closeModal = () => {
    setSpinValue(null); // Clear spin value to hide the modal
  };

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
              source={require('../assets/images/turn1.png')}
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
                // justifyContent: 'center',
                // alignContent: 'center',
                // alignItems: 'center',
                alignSelf: 'center',
              }}>
             
              {/* <SpinWheelPack /> */}
              {/* <SpinWheel
                setSpinValue={setSpinValue}
                spinValue={spinValue}
                setData={setData}
              /> */}
            </View>
          </View>
        </View>
      </LinearGradient>
      {/* {spinValue && ( */}
      {/* <ModalScreen
        visible={spinValue}
        data="This is a modal message!"
        onClose={() => setSpinValue(false)}
        dataValues={data}
      /> */}
      {/* )} */}

      {/* <Modal visible={spinValue} transparent animationType="fade">
        <View style={styles.overlay}>
          <Text style={styles.result}>You won!</Text>
          <TouchableOpacity onPress={() => setSpinValue(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
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

    // justifyContent: 'center',
    // alignItems: 'center',
    //
    //
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundColor: 'red',
    // alignContent: 'center',
    // alignSelf: 'center',
  },

  bubble: {
    width: width,
    height: height * 0.5,
    resizeMode: 'contain',
  },
  indicatorImg: {
    width: width * 0.79,
    resizeMode: 'contain',
  },
  onlyCashTxt: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: typography.Bold,
    // textAlign: 'center',
    color: '#FFFFFF',
  },
  coinView: {
    marginTop: 30,
    flexDirection: 'row',
    // alignContent: 'center',
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
    // textAlign: 'center',
    color: '#FD9C05',
  },
});
