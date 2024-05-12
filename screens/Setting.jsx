// import { Text, View } from 'react-native';


// export default function Setting() {
//     return (
//         <View>
//             <Text>
//                 o	The user must be able to choose some accessibility settings (e.g., font size).
//                 o	These settings must persist between application launches.

//             </Text>
//         </View>
//     )
// }






import { Text, Switch, View, StyleSheet } from "react-native";
import { GlobalLayout } from "../components/Layout";

import { useTheme } from "../context/theme";
import { GlobalStyles } from "../styles/global";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {
  const { isLargeText, setIsLargeText } = useTheme();

  const globalStyles = GlobalStyles();

  return (
    <GlobalLayout>
      <View style={styles.view}>
        <Switch
          value={isLargeText}
          onValueChange={async () => {
            await AsyncStorage.setItem(
              "isLargeText",
              JSON.stringify(!isLargeText)
            );
            setIsLargeText(!isLargeText);
          }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
        <Text style={globalStyles.text}>Large Text</Text>
      </View>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
});