import React, {useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';

export default function SpinWheelGame() {
  const participants = [
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '90%',
    'FREE',
  ];
  const wheelRef = useRef(null);
  const [winner, setWinner] = useState(null);

  const wheelOptions = {
    rewards: participants,
    knobSize: 50,
    borderWidth: 5,
    borderColor: '#000',
    innerRadius: 50,
    duration: 4000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: require('../assets/images/prize1.png'), // Replace with your knob image
    getWinner: (value, index) => {
      setWinner(value); // Set the winner after spinning
    },
    onRef: ref => (wheelRef.current = ref),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spin the Wheel 🎡</Text>

      {/* <WheelOfFortune options={wheelOptions} /> */}

      <Button title="Spin Now" onPress={() => wheelRef.current._onPress()} />

      {winner && <Text style={styles.result}>Winner: {winner} 🎉</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
});



{/* Indicator (Triangle at 120°) */}
      <View style={styles.indicatorContainer}>
        <Svg width={50} height={50} viewBox="0 0 50 50">
          {/* Rotate the indicator to 120° */}
          <G transform={`rotate(${0}, 25, 25)`}>
            {/* Top horizontal bar */}
            <Polygon points="10,5 40,5 40,10 10,10" fill="red" />

            {/* Vertical bars */}
            <Polygon points="10,10 15,10 15,25 10,25" fill="red" />
            <Polygon points="35,10 40,10 40,25 35,25" fill="red" />

            {/* Bottom triangle (arrowhead) */}
            <Polygon points="15,25 25,40 35,25" fill="red" />
          </G>
        </Svg>
      </View>