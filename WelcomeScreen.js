import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.contentContainer}
      indicatorStyle="white"
    >
      <Text style={styles.title}>Bienvenue sur BookShelf</Text>

      <Text style={styles.description}>
        BookShelf est votre bibliothèque numérique tout-en-un. Découvrez, lisez et organisez
        vos livres et documents préférés directement depuis votre smartphone ou votre tablette.
      </Text>

      <View style={styles.highlightCard}>
        <Text style={styles.cardTitle}>Une collection à portée de main</Text>
        <Text style={styles.cardText}>
          Explorez des milliers de titres littéraires, manuels d'étude et revues.
          Votre bibliothèque vous suit partout, même hors-connexion.
        </Text>
      </View>

      <View style={styles.highlightCard}>
        <Text style={styles.cardTitle}>Confort de lecture personnalisé</Text>
        <Text style={styles.cardText}>
          Ajustez la taille du texte, basculez entre les modes jour et nuit,
          et reprenez automatiquement votre lecture là où vous vous êtes arrêté.
        </Text>
      </View>

      <Text style={styles.description}>
        Commencez dès maintenant votre exploration littéraire et profitez d'une
        expérience de lecture fluide et immersive.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EDEFEE',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#EDEFEE',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightCard: {
    backgroundColor: '#404040',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#EE9972',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EE9972',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#EDEFEE',
  },
});
