import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Svg, {
  G,
  Path,
  Text as SvgText,
  Polygon,
  Circle,
  SvgImage,
  SvgXml,
} from 'react-native-svg'; // Import Circle
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
// import SvgImage from 'react-native-svg/lib/typescript/elements/Image';
import MoneySvgIcon from '../assets/images/money.svg';

const segments = [
  {
    label: 'Prize 1',
    name: 'Mini',
    color: '#ff7f50',
    image: require('../assets/images/2coin.png'),
    imageOpt2: '../assets/images/2coin.png',
  },
  {
    label: 'Prize 2',
    name: 'Mega',
    color: '#87ceeb',
    image: require('../assets/images/megacoin.png'),
    imageOpt2: '../assets/images/megacoin.png',
  },
  {
    label: 'Prize 3',
    name: 'Double',
    color: '#90ee90',
    image: require('../assets/images/doubleCoin.png'),
    imageOpt2: '../assets/images/doubleCoin.png',
  },
  {
    label: 'Prize 4',
    name: '?',
    color: '#ff69b4',
    image: require('../assets/images/cashOut.png'),
    imageOpt2: '../assets/images/cashOut.png',
  },
  {
    label: 'Prize 5',
    name: 'Double',
    color: '#f4a261',
    image: require('../assets/images/doubleCoin.png'),
    imageOpt2: '../assets/images/doubleCoin.png',
  },
  {
    label: 'Prize 6',
    name: 'Mini',
    color: '#e76f51',
    image: require('../assets/images/2coin.png'),
    imageOpt2: '../assets/images/2coin.png',
  },
  {
    label: 'Prize 7',
    name: 'Medium',
    color: '#2a9d8f',
    image: require('../assets/images/moneyBag.png'),
    imageOpt2: '../assets/images/moneyBag.png',
  },
  {
    label: 'Prize 8',
    name: '₹100',
    color: '#264653',
    image: require('../assets/images/100rupee.png'),
    imageOpt2: '../assets/images/100rupee.png',
  },
];

const segmentAngle = 360 / segments.length; // Each segment's angle
const pointerAngle = 250; // Pointer is at 250° (like a clock)

const SpinWheel = ({setSpinValue, spinValue, setData}) => {
  const rotation = useSharedValue(0);
  const [winner, setWinner] = useState(null);

  const handleSpinWheel = () => {
    rotation.value = 0;
    const randomSpin = 3600 + Math.floor(Math.random() * 360); // 10 full spins + random offset
    rotation.value = withTiming(randomSpin, {duration: 3000}, () => {
      'worklet';
      const finalAngle = randomSpin % 360; // Normalize within 0-360
      const adjustedAngle =
        (360 - finalAngle + pointerAngle + segmentAngle / 2) % 360; // Adjust for pointer at 250°
      const segmentIndex = Math.floor(adjustedAngle / segmentAngle); // Determine winning segment
      runOnJS(setWinner)(segments[segmentIndex].name);
      runOnJS(setData)(segments[segmentIndex]);

      runOnJS(setSpinValue)(true);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${rotation.value}deg`}],
  }));

  const defaultSvg = `
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
  </svg>
`;

  return (
    <View style={[styles.container, {marginTop: spinValue ? 0 : 200}]}>
      {/* Spinning Wheel */}
      {spinValue ? (
        <>
          <Svg width={350} height={350} viewBox="0 0 300 300">
            <G transform="translate(150,150)">
              {/* Outer Circle (Border) */}
              <Circle
                cx={0}
                cy={0}
                r={150} // Radius of the wheel
                stroke="#000" // Outer line color
                strokeWidth={10} // Outer line thickness
                fill="transparent" // Transparent fill
              />

              {/* Wheel Segments */}
              {segments.map((segment, index) => {
                const startAngle = index * segmentAngle;
                const endAngle = (index + 1) * segmentAngle;
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

                const x1 = 140 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 140 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 140 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 140 * Math.sin((Math.PI * endAngle) / 180);

                return (
                  <G key={index}>
                    <Path
                      d={`M 0 0 L ${x1} ${y1} A 140 140 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={segment.color}
                      stroke="white"
                    />

                    <SvgText
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2}
                      fill="black"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle">
                      {segment.name}
                    </SvgText>
                  </G>
                );
              })}
            </G>
          </Svg>
        </>
      ) : (
        <Animated.View style={[styles.wheelContainer, animatedStyle]}>
          <Svg width={350} height={350} viewBox="0 0 300 300">
            <G transform="translate(150,150)">
              {/* Outer Circle (Border) */}
              {/* <Circle
                cx={0}
                cy={0}
                r={150} // Radius of the wheel
                stroke="#000" // Outer line color
                strokeWidth={10} // Outer line thickness
                fill="transparent" // Transparent fill
              /> */}

              {/* Wheel Segments */}
              {segments.map((segment, index) => {
                const startAngle = index * segmentAngle;
                const endAngle = (index + 1) * segmentAngle;
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

                const x1 = 140 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 140 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 140 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 140 * Math.sin((Math.PI * endAngle) / 180);

                const imageX = (x1 + x2) / 2 - 15; // Adjust for image size
                const imageY = (y1 + y2) / 2 - 15;

                return (
                  <G key={index}>
                    <Path
                      d={`M 0 0 L ${x1} ${y1} A 140 140 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={segment.color}
                      stroke="white"
                    />

                    {/* <SvgImage
                      x={imageX} // X position
                      y={imageY} // Y position
                      width="30" // Image width
                    //   height="30" // Image height
                    //   href={require('../assets/images/prize1.png')} // Image source
                    /> */}

                    {/* <SvgImage
                      x={imageX}
                      y={imageY}
                      width="30"
                      height="30"
                      href={MoneySvgIcon} // Default SVG image
                    /> */}

                    {/* <Svg>
                      <G>
                        <MoneySvgIcon
                          width={30}
                          height={30}
                          x={(x1 + x2) / 2 - 15} // Center the image
                          y={(y1 + y2) / 2 - 15}
                        />
                      </G>
                    </Svg> */}

                    <SvgText
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2}
                      fill="black"
                      fontSize="14"
                      fontWeight="bold"
                      textAnchor="middle">
                      {segment.name}
                    </SvgText>
                    <SvgXml xml={defaultSvg} width="10" height="10" />
                  </G>
                );
              })}
            </G>
          </Svg>
        </Animated.View>
      )}
      {/* Fixed Center Image */}
      {!spinValue && (
        <TouchableOpacity
          style={styles.centerImageContainer}
          onPress={handleSpinWheel}>
          <Image
            source={require('../assets/images/centerButton.png')} // Replace with your image path
            style={styles.centerImage}
          />
        </TouchableOpacity>
      )}

      <Image
        source={require('../assets/images/hand.png')} // Replace with your image path
        style={styles.handImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  wheelContainer: {
    position: 'absolute',
  },
  centerImageContainer: {
    position: 'absolute',
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50, // Make it circular
  },
  button: {
    marginTop: 350,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  result: {marginTop: 20, fontSize: 18, fontWeight: 'bold'},
  handImg: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default SpinWheel;
