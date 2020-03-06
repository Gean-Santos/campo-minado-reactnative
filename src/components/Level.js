import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

export default props => {
  const { easy, normal, hard } = props;
  const styleButton = [styles.button];
  if (easy) styleButton.push(styles.bgEasy);
  if (normal) styleButton.push(styles.bgNormal);
  if (hard) styleButton.push(styles.bgHard);

  return(
    <TouchableOpacity
    style={styleButton}
    onPress={props.onLevel}>
      <Text style={styles.buttonLabel}>{props.level}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
  },
  bgEasy: {
    backgroundColor: '#49B65D',
  },
  bgNormal: {
    backgroundColor: '#2765F7'
  },
  bgHard: {
    backgroundColor: '#F26337'
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  }
});