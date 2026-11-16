import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    letterSpacing: 0.5,
  },
});
