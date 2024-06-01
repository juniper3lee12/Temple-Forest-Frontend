import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";


// Handle the layout within the screen of a device.
export function GlobalLayout({ children }) {
  return (
    <SafeAreaView style={StyleSheet.safeArea}>
      <StatusBar style="auto" />
      <View style={StyleSheet.container}>{children}</View>
    </SafeAreaView>
  );
}
