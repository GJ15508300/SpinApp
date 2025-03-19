import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {typography} from '../theme/typography';

const participants = [
  {name: 'Mini', image: require('../assets/images/mini.png')},
  {name: 'Mega', image: require('../assets/images/megacoin.png')},
  {name: 'Double', image: require('../assets/images/doubleCoin.png')},
  {name: '?', image: require('../assets/images/cashOut.png')},
  {name: 'Medium', image: require('../assets/images/medium.png')},
  {name: '₹100', image: require('../assets/images/100rupee.png')},
];

const ModalScreen = ({visible, data, onClose, dataValues}) => {
  const found = participants.find(
    participant => participant.name === dataValues,
  );

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <LinearGradient
          colors={['#7600EB', '#7600EB', '#7600EB', '#7600EB']}
          locations={[0, 0.3, 0.5, 0.7, 1]}
          style={styles.container}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}>
          <Image
            source={require('../assets/images/starFram.png')}
            style={styles.starFrame}
            resizeMode="contain"
          />

          <View style={styles.modalContent}>
            <Image
              source={found?.image}
              //   source={require(data?.imageOpt2)}
              //   source={require('../assets/images/2coin.png')}
              style={{width: 180, height: 100}}
              resizeMode="contain"
            />
            <Text style={styles.modalText}>congratulations!</Text>
            <Text style={styles.msgText}>
              You have win a ₹100 cash it will be credited on your spin app
              wallet
            </Text>
            <LinearGradient
              colors={['#FFBA01', '#C45805']} // Define gradient colors
              style={styles.gradient}
              start={{x: 0, y: 0}} // Gradient start point (top-left)
              end={{x: 0, y: 1}} // Gradient end point (bottom-right)
            >
              <TouchableOpacity onPress={onClose} style={styles.button}>
                <Text style={styles.buttonText}>Cash Out</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={{position: 'absolute', top: -40, right: 0}}>
            <Image
              source={require('../assets/images/x.png')}
              style={styles.xIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dim background
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999, // Ensure it is above everything
  },
  container: {
    paddingBottom: 40,
    margin: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  starFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0, // Ensure it is behind the content
  },
  content: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 90,
  },

  modalContent: {
    padding: 10,
    borderRadius: 90,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 30,
    fontFamily: typography.Bold,
    marginBottom: 10,
    color: '#FEBD01ED',
  },
  msgText: {
    fontSize: 15,
    fontFamily: typography.Medium,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFBA01',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: typography.Bold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  gradient: {
    marginTop: 35,
    borderRadius: 7,
  },
  xIcon: {
    width: 27,
    height: 27,
  },
});

export default ModalScreen;
