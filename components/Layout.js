import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

export function GlobalLayout({ children }) {
  return (
    <SafeAreaView style={StyleSheet.safeArea}>
      <StatusBar style="auto" />
      <View style={StyleSheet.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
});
