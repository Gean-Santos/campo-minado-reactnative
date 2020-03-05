import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const colums = row.map((field, c) => {
      return <Field {...field} key={c} />
    });
    return <View key={r} 
      style={{flexDirection: 'row'}}>{colums}</View>
  });
  return <View style={styles.container}>{rows}</View> 
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    backgroundColor: '#EEE'
  }
});