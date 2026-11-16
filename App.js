import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import BookShelfHeader from './BookShelfHeader';
import WelcomeScreen from './WelcomeScreen';
import BookShelfFooter from './BookShelfFooter';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#EE9972" />
      <BookShelfHeader />
      <WelcomeScreen />
      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
