import { View } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Divider, List, ListItem, Card } from '@ui-kitten/components';
import React from "react"
import { StyleSheet } from "react-native"
import Dividericon from "../components/Divider";




const data =  [
  { title: "eva-design/eva", description: "2.2.0" },
  { title: "react-native-async-storage/async-storage", description: "1.23.1" },
  { title: "react-navigation/bottom-tabs", description: "6.5.20" },
  { title: "react-navigation/drawer", description: "6.6.15" },
  { title: "react-navigation/native-stack", description: "6.9.26" },
  { title: "react-navigation/native", description: "6.1.17" },
  { title: "ui-kitten/components", description: "5.3.1" },
  { title: "expo-asset", description: "10.0.6" },
  { title: "expo-constants", description: "16.0.1" },
  { title: "expo-linking", description: "6.3.1" },
  { title: "expo-splash-screen", description: "0.27.4" },
  { title: "expo-status-bar", description: "1.12.1" },
  { title: "expo", description: "51.0.2" },
  { title: "react-native-safe-area-context", description: "4.10.1" },
  { title: "react-native-gesture-handler", description: "2.16.2" },
  { title: "react-native-reanimated", description: "3.10.1" },
  { title: "react-native-ui-lib", description: "7.21.2" },
  { title: "react-native", description: "0.74.1" },
  { title: "react", description: "18.2.0" },
  
];

export default function About() {
    const globalStyles = GlobalStyles();
    const renderItem = ({ item}) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
    />
  )

    return (
        <View>
            <ThemeProvider>
                <Layout>                    
                    <Dividericon/>                  
                </Layout>
                <Layout>
                    <Card>
                    <Text style={globalStyles.text}>                
                      Benefit from the wisdom and experience of our meditation masters. 
                      Learn new techniques, refine your practice, and overcome challenges with expert advice. 
                      Our goal is to help you achieve a more profound and effective meditation experience
                      .  
                    </Text>
                </Card>
                </Layout>
                <Layout>
                    <Text style={[styles.headline,globalStyles.text]} category='h5'> 
                        Open source license
                    </Text>
                </Layout>
                <Layout>
                    
                       <List
                         style={styles.container}
                         data={data}
                         ItemSeparatorComponent={Divider}
                         renderItem={renderItem}
                      />
                    
                </Layout>                
            </ThemeProvider>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 500
  },
   headline: {
    textAlign: 'center',
  },
})