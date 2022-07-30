import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './components/map-view';
import { useFonts } from 'expo-font';
import React, { useCallback, useState } from 'react';
import ContentView from './components/content-view';
import { Location, POI, pointsOfInterest } from './data/pois';
import { debugBorder } from './data/debug';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { fetchWeather, Weather } from './utils/weather';

const getPoiByCoordinates = ({ latitude, longitude }: Location): POI | null => {
  for (let i = 0, l = pointsOfInterest.length; i < l; i++) {
    if (pointsOfInterest[i].location.latitude === latitude && pointsOfInterest[i].location.longitude === longitude) {
      return pointsOfInterest[i];
    }
  }
  return null;
}

const usePoiSelection = (): [POI | null, Weather | null, (location: Location) => void] => {
  const [poi, setPoi] = useState(null as POI | null);
  const [weather, setWeather] = useState(null as Weather | null);
  const selectPoi = useCallback((coordinates: Location) => {
    setPoi(getPoiByCoordinates(coordinates));
    setWeather(null);
    fetchWeather(coordinates).then(setWeather);
  }, []);
  return [poi, weather, selectPoi];
};

export default function App() {
  const [loaded] = useFonts({
    JosefinSans: require('./assets/fonts/JosefinSans.ttf'),
    JosefinSansItalic: require('./assets/fonts/JosefinSans-Italic.ttf'),
  })

  const [poi, weather, selectPoi] = usePoiSelection();

  return loaded && (
    <View style={styles.container}>
      <Header />
      <ContentView style={{ ...debugBorder }}>
        <MapScreen pois={pointsOfInterest} selectPoi={selectPoi} selectedPoi={poi ? poi.name : ''} />
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
