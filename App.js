/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import MoreSpin from './src/screens/MoreSpin';
import Invitation from './src/screens/Invitation';
import CashOut from './src/screens/CashOut';
import {typography} from './src/theme/typography';

const Tab = createBottomTabNavigator();

const {width} = Dimensions.get('window');

const CustomHeader = () => {
  return (
    <View
      style={[
        styles.gradient, // Keep your existing styles
        {
          backgroundColor: '#2B0552',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      {/* <LinearGradient
        colors={['#2B0552', '#7600EB', '#7600EB', '#7600EB', '#2B0552']} // Dark on sides, light in middle
        locations={[0, 0.3, 0.5, 0.7, 1]} // Darker on edges, lightest at center
        style={[
          styles.gradient,
          {justifyContent: 'center', alignItems: 'center'},
        ]}
        start={{x: 0, y: 10}} // Start from left
        end={{x: 1, y: 0}} // End at right
      > */}
        {/* <View style={styles.containerTop}> */}
        {/* <View style={styles.header_container}> */}
        {/* <View style={styles.container}> */}
        <Image
          source={require('./src/assets/images/HomeBannerSlides1.png')}
          style={styles.bannerImg}
        />
        {/* </View> */}
        {/* </View> */}
        {/* </View> */}
      {/* </LinearGradient> */}
    </View>
  );
};

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <LinearGradient
        colors={['#2B0552', '#7600EB', '#2B0552']}
        locations={[0, 0.5, 1]}
        style={styles.fullScreenGradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                header: () => <CustomHeader />,
                tabBarShowLabel: false,
                // headerShown: false,

                tabBarIcon: ({focused}) => {
                  let iconSource;
                  let labelColor = focused ? '#330562' : '#FFFFFF';
                  let bgColor = focused ? '#FFBA01' : '#AA00FF';
                  console.log('route', route.name);

                  if (route.name === 'Home') {
                    iconSource = require('./src/assets/images/home.png');
                  } else if (route.name === 'More Spin') {
                    iconSource = require('./src/assets/images/box.png');
                  } else if (route.name === 'Invitation') {
                    iconSource = require('./src/assets/images/spin.png');
                  } else if (route.name === 'Cash Out') {
                    iconSource = require('./src/assets/images/ruppy.png');
                  }

                  return (
                    <View style={[styles.tabContainer]}>
                      <Image source={iconSource} style={styles.icon} />
                      <LinearGradient
                        colors={
                          focused
                            ? ['#FFBA01', '#E08304']
                            : ['#AA00FF', '#630095']
                        } // Define gradient colors
                        style={styles.gradient}
                        start={{x: 0, y: 0}} // Gradient start point (top-left)
                        end={{x: 0, y: 1}} // Gradient end point (bottom-right)
                      >
                        <Text
                          style={[
                            styles.tabLabel,
                            {
                              color: labelColor,
                              // backgroundColor: bgColor,
                            },
                          ]}>
                          {route.name}
                        </Text>
                      </LinearGradient>
                    </View>
                  );
                },
                tabBarStyle: styles.tabBar,
                // tabBarLabelStyle: {
                //   fontSize: 12,
                //   fontFamily: typography.Bold,
                //   // paddingTop: 0,
                //   borderWidth: 2,
                //   borderColor: '#9006C1',
                //   borderRadius: 7,
                //   paddingHorizontal: 15,
                //   backgroundColor: '#E08304',
                //   color: '#330562',
                // },
                contentStyle: {backgroundColor: 'red'},
              })}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="More Spin" component={MoreSpin} />
              <Tab.Screen name="Invitation" component={Invitation} />
              <Tab.Screen name="Cash Out" component={CashOut} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(4, 130, 103, 0.1)',
  },
  header_container: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#048267',
    // padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  fullScreenGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bannerImg: {
    width: 374,
    height: 166,
    borderRadius: 12,
    marginTop: 40,
  },
  tabBar: {
    position: 'absolute',
    height: 80,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    borderWidth: 0, // Ensure no border
    borderTopWidth: 0, // 🔥 Remove the white line
    paddingTop: 10,
  },
  tabContainer: {
    // flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
    borderColor: '#BB08FA54',
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    backgroundColor: '#8B4FC94F',
    // width: 'auto', // Allow dynamic width
    width: width * 0.22,
    height: 70,
  },

  tabLabel: {
    fontSize: 11,
    fontFamily: typography.SemiBold,
    borderWidth: 2,
    borderRadius: 7,
    // paddingHorizontal: 15,
    // paddingVertical: 5,
    // marginTop: 5,
    textAlign: 'center',
    borderColor: '#9006C1',
    width: 70,
  },
  icon: {
    height: 25,
    width: 25,
    marginBottom: 5,
  },
  gradient: {
    borderRadius: 7,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingHorizontal: 22,
    // paddingTop: 35,
    // paddingVertical: 17,
    // borderEndColor: '#000000',
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
  },
});
