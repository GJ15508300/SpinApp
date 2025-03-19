import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import {typography} from '../theme/typography';
import spinButton from '../assets/images/spinButton.png';
import backgroundImage from '../assets/images/bgMultiColor.png';
import outerBackgroundImage from '../assets/images/outerBG.png';

const participants = [
  'Mini',
  'Mega',
  'Double',
  '?',
  'Double',
  'Mini',
  'Medium',
  '₹100',
];

const SpinWheelPack = ({setWinnerValue}) => {
  const [started, setStarted] = useState(false);
  const wheelRef = useRef(null);
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ).start();
  }, [colorAnim]);

  const buttonPress = () => {
    setStarted(true);
    if (started) {
      wheelRef.current?._tryAgain();
    } else {
      wheelRef.current?._onPress();
    }
  };

  const wheelOptions = {
    rewards: participants,
    knobSize: 30,
    borderWidth: 0,
    innerRadius: 30,
    duration: 6000,
    backgroundColor: 'transparent', // Important: Make wheel background transparent
    textAngle: 'horizontal',
    knobSource: require('../assets/images/arrow.png'),
    onRef: ref => (wheelRef.current = ref),
    colors: 'transparent',
    innerImage: backgroundImage,
    outerBackgroundImage: outerBackgroundImage,
    fontFamily: typography.SemiBold,
    fontSize: 18,
  };

  return (
    <View style={styles.container}>
      <WheelOfFortune
        options={wheelOptions}
        getWinner={(value, index) => {
          setWinnerValue(value);
        }}
      />

      <View style={styles.startButtonView}>
        <TouchableOpacity onPress={buttonPress} style={styles.startButton}>
          <Image source={spinButton} style={styles.spinBtnIcon} />
          <Text style={styles.startButtonText}>Spins</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/images/hand.png')}
          style={styles.handImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  wheelBackground: {
    ...StyleSheet.absoluteFillObject, // Cover the entire area
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    // backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
    justifyContent: 'center',
  },
  spinBtnIcon: {
    width: 100,
    height: 100,
  },
  startButtonText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: typography.Bold,
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  customKnobStyle: {
    position: 'absolute', // Position over the wheel
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
  },
  handImg: {
    width: 96,
    height: 96,
    position: 'absolute',
    bottom: -20,
    right: -40,
    borderRadius: 100,
  },
});

export default SpinWheelPack;
