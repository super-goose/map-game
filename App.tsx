import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './components/map-view';
import { useFonts } from 'expo-font';
import React from 'react';
import ContentView from './components/content-view';
import { pointsOfInterest } from './data/pois';
import { debugBorder } from './data/debug';
import { Header } from './components/header';


const Footer = () => {
  return (
    <View style={{
      height: Dimensions.get('window').height * .2,
      borderTopColor: "#052",
      borderTopWidth: 2,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      ...debugBorder
    }}>
      <Text
        style={{
          color: '#ddf',
          fontFamily: 'JosefinSans',
        }}
      >footer</Text>
    </View>
  );
}

export default function App() {
  const [loaded] = useFonts({
    JosefinSans: require('./assets/fonts/JosefinSans.ttf'),
    JosefinSansItalic: require('./assets/fonts/JosefinSans-Italic.ttf'),
  })
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header />
      <ContentView style={{ ...debugBorder }}>
        <MapScreen pois={pointsOfInterest} />
      </ContentView>
      <Footer />
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
