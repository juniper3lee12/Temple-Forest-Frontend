import { Text, Switch, View, StyleSheet } from "react-native";
import { GlobalLayout } from "../components/Layout";
import { useTheme } from "../context/theme";
import { GlobalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import { Button } from '@ui-kitten/components';
import { ThemeContext } from '../context/theme-context';


export default function Setting() {
  const { isLargeText, setIsLargeText } = useTheme();
  const globalStyles = GlobalStyles();
  const themeContext = React.useContext(ThemeContext)

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
      
      <View>             
        <Text style={globalStyles.text}>White or Dark Theme</Text>       
        <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
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