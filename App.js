import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Color from './constants/colors';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const App= () => {

  //Funciones
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    });
  

  if (loaded){
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Color.letter} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;