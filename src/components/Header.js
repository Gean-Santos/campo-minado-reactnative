import React from 'react';
import {
  View,
  StyleSheet,
  Text, TouchableOpacity,
} from 'react-native';
import Flag from './Flag';

export default props => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.label}>Campo Minado</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress}
          style={styles.flagButton}>
            <Flag bigger />
          </TouchableOpacity>
          <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  label:{
    color: '#0B1F4E',
    fontWeight: 'bold',
    fontSize: 18
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
    width: '100%'
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#4F6598',
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold',
  }
});

