import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Level from '../components/Level';

export default props => {
  return (
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} animationType='slide'
      transparent={true}>
        <View style={styles.frame}>
          <View style={styles.container}>
            <Text style={styles.title}>Selecione o Nível</Text>
            <Level level='Fácil' onLevel={() => props.onLevelSelected(0.1)} easy/>
            <Level level='Normal' onLevel={() => props.onLevelSelected(0.2)} normal/>
            <Level level='Difícil' onLevel={() => props.onLevelSelected(0.3)} hard/>
            {/* <TouchableOpacity
              style={[styles.button, styles.bgNormal]}
              onPress={() => props.onLevelSelected(0.2)}>
                <Text style={styles.buttonLabel}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.bgHard]}
              onPress={() => props.onLevelSelected(0.3)}>
                <Text style={styles.buttonLabel}>Difícil</Text>
            </TouchableOpacity> */}
              
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});