import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Avatar,Calendar, Datepicker } from '@ui-kitten/components';


export default function CalendarComponent() {
    const globalStyles = GlobalStyles();
    const [date, setDate] = useState(new Date());

    return (       
      
            <Layout style={styles.container} level='1' >
                <ImageBackground source={require('../../Front-end/assets/dark5.jpg')} resizeMode="stretch" style={styles.image}>
                   <Text style={styles.text} category='h6'> {`Selected date: ${date.toLocaleDateString()}`} </Text>
                </ImageBackground>
                <Datepicker date={date} onSelect={nextDate => setDate(nextDate)} />
            </Layout>
        
    )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 376,   
    width:350, 
   
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,    
  }
});


