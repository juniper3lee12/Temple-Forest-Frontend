import { GlobalStyles } from "../styles/global";
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Meditate({ navigation,route} ) {
    const globalStyles = GlobalStyles();
    


    return (
        <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
    )
}