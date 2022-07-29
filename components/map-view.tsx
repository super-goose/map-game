import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from "react";
import { Location, POI } from "../data/pois";


const PoiMarker: React.FC<{ poi: POI }> = ({ poi }) => (
  <Marker
    coordinate={poi.location}
    pinColor={'#4df'}

  // image={{ uri: poi.image }}
  />

);

type MapProps = {
  pois: Array<POI>
  selectPoi: (location: Location) => Promise<any>
}
export const MapScreen: React.FC<MapProps> = ({ pois, selectPoi }) => (
  <MapView
    style={styles.map}
    region={{
      latitude: 51.1772,
      latitudeDelta: 8.3794,
      longitude: 10.5142,
      longitudeDelta: 9.5823,
    }}
    scrollEnabled={false}
    // onRegionChange={console.log}
    toolbarEnabled={false}
    moveOnMarkerPress={false}
    onMarkerPress={(e) => {
      e.preventDefault();
      selectPoi(e.nativeEvent.coordinate);
    }}
  >
    {pois.map((poi: POI) => (
      <PoiMarker key={poi.name} poi={poi} />
    ))}
  </MapView>
);


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height * .7)
  },
});