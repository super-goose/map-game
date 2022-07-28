import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export const MapScreen = () => (
  <MapView style={styles.map} />
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width
  },
});