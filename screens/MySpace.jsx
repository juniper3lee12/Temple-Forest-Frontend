import { View, ListRenderItemInfo, StyleSheet,ScrollView } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Button, Card, Layout, Text, List } from '@ui-kitten/components';
import Constants from "expo-constants";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useRoute} from '@react-navigation/native';




const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export default function MySpace() { 

    const [notes, setNotes] = useState([]); 
    const globalStyles = GlobalStyles();
    const navigation = useNavigation();
    const route = useRoute();    
    
    // async function getToken (){
    //     const authParameters = {
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //         body:JSON.stringify({
    //             "email":route.params.email,
    //             "password":route.params.password,
    //         }),
    //     };

    //     const res = await fetch(
    //         `http://${API_URL}/users/login`, authParameters
    //     );
    //     const resJson =await res.json();
    //     console.log(resJson);
    //     console.log("Response is " + resJson);
    //     const token = resJson["access_token"];
    //     return token;
    // }
    

    const getData = async () => {
        try {
            const response = await fetch(`http://${API_URL}/meditate`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            //console.log('Parsed JSON data:', data);
            setNotes(data.notes);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        // const token = await getToken();
        const authorization = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + route.params.token,
            },
        };
        try{
            const del = await fetch(`http://${API_URL}/users/delete/` + id,authorization);
            if (!del.ok){
                throw new Error('Network response was not ok');
            }
            const data = await del.json();
            // Update the state to remove the deleted note
            setNotes(notes.filter(note => note.id !== id));

        }catch (error){
            console.error('Error:', error);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

   

    
    const Footer = ({note}) => {
        // const globalStyles = GlobalStyles();
        // const navigation = useNavigation();

        return (
            <View style={styles.footerContainer}>
                <Button 
                title= "Edit Note"
                onPress={() => navigation.navigate('Update', {id: note.id, token: route.params.token})}                
                style={styles.footerControl}
                size='small'
                status='success'>
                    Add comment
                </Button>
                <Button 
                title= "Delete Note"
                onPress={()=>handleDelete(note.id)}
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
                   <Card key={note.id} style={styles.item} status="basic"  footer={() => <Footer note={note}/>} header={() => <Header note={note} />}  >
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