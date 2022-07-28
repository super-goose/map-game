import React from "react";
import { Dimensions, StyleProp, StyleSheet, View, ViewProps } from "react-native";

const ContentView: React.FC<{ style: StyleProp<object> }> = ({ children, style }) => (
  <View
    style={{
      ...style as object,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * .9,
    }}>
    {children}
  </View>
);

export default ContentView;