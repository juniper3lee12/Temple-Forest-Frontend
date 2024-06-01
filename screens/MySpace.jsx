import { View, StyleSheet,ScrollView,Alert } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Button, Card, Text} from '@ui-kitten/components';
import Constants from "expo-constants";
import { useState, useCallback } from 'react';
import { useNavigation, useRoute, useFocusEffect} from '@react-navigation/native';


const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export default function MySpace() { 

    const [notes, setNotes] = useState([]); 
    const globalStyles = GlobalStyles();
    const navigation = useNavigation();
    const route = useRoute();       // Give access to token from login screen
   
    const getData = async () => {
        try {
            const response = await fetch(`http://${API_URL}/meditate`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setNotes(data.notes);
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('We cannot receive the information from server');
        }
    };

    const handleDelete = async (id) => {    
        const authorization = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + route.params.token,  // Send Token with headers to request permission to delete note
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
            Alert.alert('We cannot process your deletion');
        }
    }
    
    // Use FocusEffect hook to call getData() whenever naigate back from Update screen.
    useFocusEffect(
        useCallback(() => {
        getData();
    }, [])
); 

    
    const Footer = ({note}) => {       

        return (
            <View style={styles.footerContainer}>
                <Button 
                title= "Edit Note"
                onPress={() => navigation.navigate('Update', {id: note.id, token: route.params.token})}   // Navigate to Update screen and let it access to the token and note id           
                style={styles.footerControl}
                size='small'
                status='success'>
                    Add comment
                </Button>
                <Button 
                title= "Delete Note"
                onPress={()=>handleDelete(note.id)}  // Call handleDelete function to delete a note
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
            <Text style={globalStyles.text} category='h6'>                
               Note: {note.id}
            </Text>

            </View>
        )
        
    }

    return (
        
        <ThemeProvider>            
            <ScrollView style={styles.container}>
                {/* Return all the notes from data base */}
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