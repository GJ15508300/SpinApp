import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { typography } from '../theme/typography';

const MoreSpin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Under Development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(4, 130, 103, 0.1)',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    color: '#000000',
    fontFamily: typography.Bold,
  },
});

export default MoreSpin;
