import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Datepicker } from '@ui-kitten/components';


// This child component provides a calendar for user to pick a date to record a journal.
export default function CalendarComponent({onDataChange}) {
    const globalStyles = GlobalStyles();
    const [date, setDate] = useState(new Date());
    useEffect(() => {if(onDataChange) {      
      onDataChange(date);
    }
  }, [date, onDataChange]);    

    return ( 
      <View> 
        <ThemeProvider>
        <Layout style={styles.container} level='1' >
                <ImageBackground source={require('../../Front-end/assets/dark5.jpg')} resizeMode="stretch" style={styles.image}>
                   <Text style={globalStyles.text} category='h6'> {`Selected date: ${date.toLocaleDateString()}`} </Text>
                </ImageBackground>
                <Datepicker date={date} onSelect={nextDate => setDate(nextDate)} />
            </Layout>
            </ThemeProvider>        
      </View>      
      
            
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


