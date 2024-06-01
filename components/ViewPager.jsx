import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";

//This child component provide meditation programs. ViewPager can swipe left and right.
export default function Choice() {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const globalStyles = GlobalStyles();

  return (
    <ThemeProvider>
    <ViewPager selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
      <Layout style={styles.tab} level='2'>
        <Text style={globalStyles.text} category='h5'>Goal:Vipassana 2 hours</Text>
      </Layout>
      <Layout style={styles.tab} level='2' >
        <Text style={globalStyles.text} category='h5'>Goal:Vipassana 1 hour</Text>
      </Layout>      
    </ViewPager>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 70,   
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor:"skyblue",
  },
});