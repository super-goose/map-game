import MapView, { LatLng, Marker, Polygon } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import React, { useState } from "react";
import { Location, POI } from "../data/pois";
import { isPointInPolygon } from "geolib";

/*
outlines of germany (country and states):
https://gadm.org/download_country_v3.html
*/

const PoiMarker: React.FC<{ poi: POI, selected: boolean }> = ({ poi, selected }) => (
  <Marker
    coordinate={poi.location}
    pinColor={selected ? '#07a' : '#4df'}
    draggable={false}
  />

);

type MapProps = {
  pois: Array<POI>
  selectPoi: (location: Location) => void
  selectedPoi: string | null
}
export const MapScreen: React.FC<MapProps> = ({ pois, selectPoi, selectedPoi }) => {
  const [polygon, setPolygon] = useState([] as Array<LatLng>);
  return (
    <View>

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
        onPanDrag={(e) => {
          setPolygon([...polygon, e.nativeEvent.coordinate]);
          console.log('pan dragging happening');
          console.log(e.nativeEvent.coordinate);
        }}
      >
        {pois
          .filter((poi: POI) => {
            if (polygon.length === 0) {
              return true;
            }
            return isPointInPolygon(poi.location, polygon);
          })
          .map((poi: POI) => {
            return (
              <PoiMarker key={poi.name} poi={poi} selected={poi.name === selectedPoi} />
            )
          })}
        {polygon.length > 0 &&
          <Polygon
            coordinates={polygon}
            strokeColor="red"
            strokeWidth={1}
          />
        }
      </MapView>
      {polygon.length > 0 &&
        <View style={{
          zIndex: 2,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}>
          <Button
            title="clear"
            onPress={() => setPolygon([])}
          />
        </View>
      }
    </View>
  );
};


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height * .7)
  },
});