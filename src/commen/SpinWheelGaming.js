import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Svg, {Circle, G, Text as SvgText} from 'react-native-svg';

const SpinWheelGaming = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [result, setResult] = useState(null);

  const prizes = [
    'Prize 1',
    'Prize 2',
    'Prize 3',
    'Prize 4',
    'Prize 5',
    'Prize 6',
  ];
  const numberOfSegments = prizes.length;
  const degreesPerSegment = 360 / numberOfSegments;

  const spin = () => {
    const randomSpin = Math.floor(Math.random() * 360) + 720; // Spin at least 2 full circles
    const selectedSegment = Math.floor((randomSpin % 360) / degreesPerSegment);
    setResult(prizes[selectedSegment]);

    Animated.timing(spinValue, {
      toValue: randomSpin,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{rotate: spinInterpolate}]}}>
        <Svg height="300" width="300">
          <G
            transform={{
              rotation: -degreesPerSegment / 2,
              originX: 150,
              originY: 150,
            }}>
            {prizes.map((prize, index) => (
              <G
                key={index}
                transform={{
                  rotation: degreesPerSegment * index,
                  originX: 150,
                  originY: 150,
                }}>
                <Circle
                  cx="150"
                  cy="150"
                  r="150"
                  fill={`hsl(${(360 / numberOfSegments) * index}, 70%, 50%)`}
                />
                <SvgText
                  x="150"
                  y="50"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  transform={{
                    rotation: degreesPerSegment / 2,
                    originX: 150,
                    originY: 150,
                  }}>
                  {prize}
                </SvgText>
              </G>
            ))}
          </G>
        </Svg>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={spin}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>You won: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SpinWheelGaming;
