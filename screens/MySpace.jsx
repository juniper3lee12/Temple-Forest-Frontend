import { View, ListRenderItemInfo, StyleSheet,ScrollView } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Button, Card, Layout, Text, List } from '@ui-kitten/components';
import Constants from "expo-constants";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const data = new Array(8).fill({
  title: 'Item',
});


const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export default function MySpace() { 

    const [notes, setNotes] = useState([]); 

    const globalStyles = GlobalStyles();
    

    const getData = async () => {
        try {
            const response = await fetch(`http://${API_URL}/meditate`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Parsed JSON data:', data);
            setNotes(data.notes);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteData = async () => {
        
    }

    useEffect(() => {
        getData();
    }, []);

    
    const Footer = () => {
        const globalStyles = GlobalStyles();
        const navigation = useNavigation();

        return (
            <View style={styles.footerContainer}>
                <Button 
                title= "Edit Note"
                onPress={() => navigation.navigate('Meditate')}
                style={styles.footerControl}
                size='small'
                status='success'>
                    Add comment
                </Button>
                <Button 
                title= "Edit Note"
                onPress={() => navigation.navigate('Meditate')}
                style={styles.footerControl}
                size='small'
                status='primary'>
                    Delete
                </Button>
            </View>
        )
    }

    const Header =({note}) => {

        return(
            <View>
            <Text category='h6'>                
               Note: {note.id}
            </Text>

            </View>
        )
        
    }

    return (
        
        <ThemeProvider>
            
            <ScrollView style={styles.container}>
                {notes.map((note) => (
                   <Card style={styles.item} status="basic"  footer={Footer} header={() => <Header note={note} />}  >
                       <Text style={globalStyles.text}>Date: {note.date}</Text>
                       <Text style={globalStyles.text}>Experience: {note.input1}</Text>
                       <Text style={globalStyles.text}>Improvement: {note.input2}</Text>           
                   </Card>
                ))}
            </ScrollView>
        </ThemeProvider>
       
    )
}


const styles = StyleSheet.create({
  container: {
    maxHeight: 700,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerControl: {
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});