import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Tous droits réservés – BookShelf, 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
});
