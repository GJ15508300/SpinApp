/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from './src/theme/typography';
import {SafeAreaView} from 'react-native-safe-area-context';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Home from './src/screens/Home';
import MoreSpin from './src/screens/MoreSpin';
import Invitation from './src/screens/Invitation';
import CashOut from './src/screens/CashOut';

const Tab = createBottomTabNavigator();

const {width} = Dimensions.get('window');

const cardWidth = width * 0.89; // Each card takes 85% of screen width

const data = [
  {
    id: '1',
    image:
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
  },
  {
    id: '2',
    image:
      'https://th.bing.com/th/id/R.124a1db7be2c13d936d8a71bd43ffd5f?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: '3',
    image:
      'https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg',
  },
];


// const CustomHeader = ({title}) => {
//   const scrollViewRef = useRef(null);
//   const defaultIndex = 1;

//   useEffect(() => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({
//         x: cardWidth * defaultIndex - 8,
//         animated: true,
//       });
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header_container}>
//         <LinearGradient
//           colors={['#048267', '#025947']} // Define gradient colors
//           style={styles.gradient}
//           start={{x: 0, y: 0}} // Gradient start point (top-left)
//           end={{x: 1, y: 1}} // Gradient end point (bottom-right)
//         >
//           <Text style={styles.text}>App Name logo</Text>
//           <View style={styles.user_view}>
//             <View style={[styles.icon_view, {marginRight: 12}]}>
//               <Image
//                 source={require('./src/assets/images/user.png')}
//                 style={styles.userIcon}
//               />
//             </View>
//             <View style={styles.icon_view}>
//               <Image
//                 source={require('./src/assets/images/bell.png')}
//                 style={styles.userIcon}
//               />
//             </View>
//           </View>
//         </LinearGradient>
//       </View>

//       <ScrollView
//         ref={scrollViewRef}
//         scrollEnabled={true}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         // pagingEnabled
//         contentContainerStyle={{
//           // paddingHorizontal: 10,
//           marginTop: 14,
//           marginBottom: 13,
//         }}
//         snapToStart={1}>
//         {data.map((item, index) => (
//           <View style={styles.carouseCardView} key={index}>
//             <ImageBackground
//               source={require('./src/assets/images/bg.jpg')}
//               style={styles.background}
//               borderRadius={15}
//               resizeMode="cover">
//               <View style={styles.carouseView}>
//                 <View style={styles.carouseHeaderView}>
//                   <Text style={styles.carouseTitle}>
//                     International League T20
//                   </Text>

//                   <Image
//                     source={require('./src/assets/images/live.png')}
//                     style={styles.liveImg}
//                   />
//                 </View>
//                 <View style={styles.dataView}>
//                   <View style={styles.textImgView}>
//                     <Image
//                       source={require('./src/assets/images/ind.png')}
//                       style={styles.iconStyle}
//                     />
//                     <Text style={styles.indTxt}>IND</Text>
//                   </View>
//                   <View style={styles.textImgView}>
//                     <Text style={styles.srcTxt}>30/0 (4)</Text>
//                     <Text style={styles.bowlDetailsText}>ADKR to Bowl</Text>
//                   </View>
//                   <View style={styles.textImgView}>
//                     <Image
//                       source={require('./src/assets/images/engd.png')}
//                       style={styles.iconStyle}
//                     />
//                     <Text style={styles.indTxt}>END</Text>
//                   </View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

export default function App() {
  SystemNavigationBar.navigationHide();

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 50,
          // backgroundColor: 'red',
          // overflow: 'hidden',
          // elevation: 1,
        }}>
        <LinearGradient
          colors={['#048267', '#025947']} // Define gradient colors
          style={styles.gradient}
          start={{x: 0, y: 0}} // Gradient start point (top-left)
          end={{x: 1, y: 1}}
        />
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          // backgroundColor: 'red', paddingBottom: 10
        }}>
        <NavigationContainer>
          <Tab.Navigator
          // screenOptions={({route}) => ({
          //   header: () => <CustomHeader title={route.name} />,
          //   tabBarIcon: ({focused, color, size}) => {
          //     let iconSource;
          //     update = route.name;
          //     if (route.name === 'Home') {
          //       iconSource = require('./src/assets/images/home.png');
          //     } else if (route.name === 'Series') {
          //       iconSource = require('./src/assets/images/cup.png');
          //     } else if (route.name === 'Reels') {
          //       iconSource = require('./src/assets/images/play.png');
          //     } else if (route.name === 'Images') {
          //       iconSource = require('./src/assets/images/img.png');
          //     }

          //     return (
          //       <Image
          //         source={iconSource}
          //         style={{
          //           height: 25,
          //           width: 25,
          //           tintColor: focused ? '#048267' : '#000000',
          //           // marginTop: 10,
          //         }}
          //       />
          //     );
          //   },
          //   tabBarActiveTintColor: '#048267',
          //   tabBarInactiveTintColor: '#000000',
          //   tabBarStyle: {
          //     backgroundColor: '#fff',
          //     // backgroundColor: '#048267',
          //     borderTopLeftRadius: 20,
          //     borderTopRightRadius: 20,
          //     position: 'absolute',
          //     overflow: 'hidden',
          //     height: 70,
          //     alignSelf: 'center',
          //     alignContent: 'center',
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //     paddingTop: 10,
          //     elevation: 5,
          //     shadowColor: '#000',
          //     shadowOffset: {width: 0, height: 5},
          //     shadowOpacity: 0.3,
          //     shadowRadius: 6,
          //     paddingBottom: 5,
          //   },

          //   tabBarLabelStyle: {
          //     fontSize: 12,
          //     fontFamily: typography.Poppins_SemiBold,
          //     // paddingTop: 10,
          //   },
          //   keyboardHidesTabBar: false,
          // })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="More Spin" component={MoreSpin} />
            <Tab.Screen name="Invitation" component={Invitation} />
            <Tab.Screen name="CashOut" component={CashOut} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header_container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#048267',
    // padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 35,
    paddingVertical: 17,
    borderEndColor: '#000000',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: typography.ExtraBoldItalic,
  },
  user_view: {
    flexDirection: 'row',
  },
  icon_view: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: '#048267',
    borderRadius: 30,
  },
  userIcon: {
    width: 15.17,
    height: 17.93,
  },

  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(4, 130, 103, 0.1)',
  },
  slide: {borderRadius: 10, overflow: 'hidden', elevation: 5},
  image: {width: '100%', height: 200, borderRadius: 10},
  carouseView: {
    flex: 1,
    // borderWidth: 1,
    // justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingTop: 9,
    // paddingBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
  carouseHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carouseTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: typography.SemiBold,
  },
  liveTxt: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: typography.SemiBold,
    // backgroundColor: '#FF0000',
    // borderWidth: 2,
    // borderColor: '#820404',
    // borderRadius: 6,
    // paddingHorizontal: 5,
    // paddingVertical: 0,
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
  },
  liveImg: {
    width: 57,
    height: 18,
    resizeMode: 'center',
  },
  dataView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 18,
    // alignContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // marginBottom: 12,
  },
  textImgView: {
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'red',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  background: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: width * 0.3,
    // backgroundColor: 'red',
    // width: width * 0.9,
    // width: '100%', // Ensure full width of parent View
    height: 110,
    borderRadius: 10,
    // overflow: 'hidden',
  },
  indTxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: typography.SemiBold,
  },
  srcTxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: typography.Bold,
  },
  bowlDetailsText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: typography.Medium,
  },
  // overlay: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a dark overlay
  //   padding: 20,
  //   borderRadius: 10,
  // },
  carouseCardView: {
    // flex: 1,
    // backgroundColor: 'red',/
    // marginHorizontal: 10,
    width: cardWidth,
    marginHorizontal: 5,
  },
});
