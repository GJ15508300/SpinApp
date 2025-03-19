// _renderSvgWheel = () => {
//   return (
//     <View style={styles.container}>
//       {this._renderKnob()}
//       <Animated.View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           transform: [
//             {
//               rotate: this._angle.interpolate({
//                 inputRange: [-this.oneTurn, 0, this.oneTurn],
//                 outputRange: [
//                   `-${this.oneTurn}deg`,
//                   `0deg`,
//                   `${this.oneTurn}deg`,
//                 ],
//               }),
//             },
//           ],
//           backgroundColor: this.props.options.backgroundColor
//             ? this.props.options.backgroundColor
//             : '#fff',
//           width: width - 20,
//           height: width - 20,
//           borderRadius: (width - 20) / 2,
//           borderWidth: this.props.options.borderWidth
//             ? this.props.options.borderWidth
//             : 2,
//           borderColor: this.props.options.borderColor
//             ? this.props.options.borderColor
//             : '#fff',
//           opacity: this.state.wheelOpacity,
//         }}>
//         <AnimatedSvg
//           width={this.state.gameScreen}
//           height={this.state.gameScreen}
//           viewBox={`0 0 ${width} ${width}`}
//           style={{
//             transform: [{rotate: `-${this.angleOffset}deg`}],
//             margin: 10,
//           }}>
//           <G y={width / 2} x={width / 2}>
//             {this._wheelPaths.map((arc, i) => {
//               const [x, y] = arc.centroid;
//               const number = arc.value.toString();

//               return (
//                 <G key={`arc-${i}`}>
//                   <Path d={arc.path} strokeWidth={2} fill={arc.color} />
//                   <G
//                     rotation={
//                       (i * this.oneTurn) / this.numberOfSegments +
//                       this.angleOffset
//                     }
//                     origin={`${x}, ${y}`}>
//                     {this._textRender(x, y, number, i)}
//                   </G>
//                 </G>
//               );
//             })}
//           </G>
//         </AnimatedSvg>
//       </Animated.View>
//     </View>
//   );
// };

// _renderSvgWheel = () => {
//   return (
//     <View style={styles.container}>
//       {this._renderKnob()}
//       <TouchableOpacity
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: width - 20,
//           height: width - 20,
//           borderRadius: (width - 20) / 2,
//           opacity: this.state.wheelOpacity,
//           alignContent:'center',
//           alignSelf:'center',
//         }}
//       >
//         <ImageBackground
//           source={this.props.options.outerBackgroundImage} // Use backgroundImage prop
//           style={{
//             width: '100%',
//             height: '100%',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           resizeMode="cover"
//         >
//            <ImageBackground
//           source={this.props.options.innerImage} // Use backgroundImage prop
//           style={{
//             width: '95%',
//             height: '95%',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           resizeMode="cover"
//         >
//           <Animated.View
//             style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               transform: [
//                 {
//                   rotate: this._angle.interpolate({
//                     inputRange: [-this.oneTurn, 0, this.oneTurn],
//                     outputRange: [
//                       `-${this.oneTurn}deg`,
//                       `0deg`,
//                       `${this.oneTurn}deg`,
//                     ],
//                   }),
//                 },
//               ],
//               backgroundColor: this.props.options.backgroundColor
//                 ? this.props.options.backgroundColor
//                 : 'transparent', // Make background transparent
//               width: width - 20,
//               height: width - 20,
//               borderRadius: (width - 20) / 2,
//               borderWidth: this.props.options.borderWidth
//                 ? this.props.options.borderWidth
//                 : 2,
//               borderColor: this.props.options.borderColor
//                 ? this.props.options.borderColor
//                 : '#fff',
//               opacity: this.state.wheelOpacity,
//             }}
//           >
//             <AnimatedSvg
//               width={this.state.gameScreen}
//               height={this.state.gameScreen}
//               viewBox={`0 0 ${width} ${width}`}
//               style={{
//                 transform: [{ rotate: `-${this.angleOffset}deg` }],
//                 margin: 10,
//               }}
//             >
//               <G y={width / 2} x={width / 2}>
//                 {this._wheelPaths.map((arc, i) => {
//                   const [x, y] = arc.centroid;
//                   const number = arc.value.toString();

//                   return (
//                     <G key={`arc-${i}`}>
//                       <Path d={arc.path} strokeWidth={2} fill={arc.color} />
//                       <G
//                         rotation={
//                           (i * this.oneTurn) / this.numberOfSegments +
//                           this.angleOffset
//                         }
//                         origin={`${x}, ${y}`}
//                       >
//                         {this._textRender(x, y, number, i)}
//                       </G>
//                     </G>
//                   );
//                 })}
//               </G>
//             </AnimatedSvg>

//           </Animated.View>
//           </ImageBackground>
//         </ImageBackground>
//       </TouchableOpacity>
//     </View>
//   );
// };
