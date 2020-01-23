import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ViewItem({ label, value, line }) {
  if (value) {
    return (
      <View styles={styles.item}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 50,
    height: 60
  },
  label: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#c3c3c3',
    marginRight: 30
  },
  value: {
    fontSize: 14,
    marginBottom: 13,
    marginRight: 30
  },
  line: {
    borderWidth: 1
  }
});
