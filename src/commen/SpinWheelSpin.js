import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';

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

const SpinWheelSpin = () => {
  const [winnerValue, setWinnerValue] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [started, setStarted] = useState(false);
  const wheelRef = useRef(null);

  const buttonPress = () => {
    setStarted(true);
    wheelRef.current?._onPress();
  };

  const wheelOptions = {
    rewards: participants,
    knobSize: 30,
    borderWidth: 5,
    borderColor: '#fff',
    innerRadius: 30,
    duration: 6000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: require('../assets/images/knob.png'),
    onRef: ref => (wheelRef.current = ref),
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={require('../assets/images/bgMultiColor.png')}
        style={{width: 100, height: 100}}
      />
      <WheelOfFortune
        options={wheelOptions}
        getWinner={(value, index) => {
          setWinnerValue(value);
          setWinnerIndex(index);
        }}
      />
      {!started && (
        <View style={styles.startButtonView}>
          <TouchableOpacity onPress={buttonPress} style={styles.startButton}>
            <Text style={styles.startButtonText}>Spin to win!</Text>
          </TouchableOpacity>
        </View>
      )}
      {winnerIndex !== null && (
        <View style={styles.winnerView}>
          <Text style={styles.winnerText}>
            You win {participants[winnerIndex]}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setWinnerIndex(null);
              wheelRef.current?._tryAgain();
            }}
            style={styles.tryAgainButton}>
            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SpinWheelSpin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E74C3C',
    // backgroundColor: 'red',
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
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
});
