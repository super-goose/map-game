import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './components/map-view';
import { useFonts } from 'expo-font';
import React from 'react';
import ContentView from './components/content-view';
import { pointOfInterest } from './data/castles';

const debugBorder = {
  // borderWidth: 1,
  // borderColor: 'magenta',
};
const titleHeight = Dimensions.get('window').height * .1

const Title: React.FC = ({ children }) => (
  <Text style={{
    fontSize: 36,
    fontFamily: 'JosefinSans',
    color: '#ddf',
    ...debugBorder,
  }}>{children}</Text>
);

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
      <View style={{
        height: titleHeight,
        ...debugBorder,
      }}>
        <Title>Germany</Title>
      </View>
      <ContentView style={{ ...debugBorder }}>
        <MapScreen pois={pointOfInterest} />
      </ContentView>
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
    justifyContent: 'center',
    ...debugBorder,

  },
});
