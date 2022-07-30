import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './components/map-view';
import { useFonts } from 'expo-font';
import React, { useCallback, useState } from 'react';
import ContentView from './components/content-view';
import { pointsOfInterest } from './data/pois';
import { debugBorder } from './data/debug';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { fetchWeather } from './utils/weather';


export default function App() {
  const [loaded] = useFonts({
    JosefinSans: require('./assets/fonts/JosefinSans.ttf'),
    JosefinSansItalic: require('./assets/fonts/JosefinSans-Italic.ttf'),
  })
  if (!loaded) {
    return null;
  }

  const [poi, setPoi] = useState(null);
  const [weather, setWeather] = useState(null);
  const selectPoi = useCallback(() => { }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ContentView style={{ ...debugBorder }}>
        <MapScreen pois={pointsOfInterest} selectPoi={fetchWeather} />
      </ContentView>
      <Footer poi={poi} weather={weather} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    // flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    // justifyContent: 'center',
    ...debugBorder,

  },
});
