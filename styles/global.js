import { StyleSheet } from "react-native";
import { useTheme } from "../context/theme";

// font size theme
export function GlobalStyles() {
  const { isLargeText } = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontSize: isLargeText ? 28 : 16,
    },
  });
  return styles;
}
