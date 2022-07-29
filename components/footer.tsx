import { Dimensions, Text, View } from "react-native";
import { debugBorder } from "../data/debug";

export const Footer = () => {
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
