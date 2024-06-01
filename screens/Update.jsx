import React, { useState } from "react"
import { StyleSheet, View, TextInput, Alert } from "react-native"
import { Card, Button } from "@ui-kitten/components"
import { useNavigation, useRoute} from '@react-navigation/native';
import Constants from "expo-constants"; 


const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export default function Update() {
  
  const route = useRoute();
  const [form, setForm] = useState({ message1: '', message2:  ''});   
  const navigation = useNavigation();  

  const handleUpdate = async (id) => {        
        const authorization = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + route.params.token,
            },
            body: JSON.stringify({ message1: form.message1, message2: form.message2 })
        };
        try{
            const update = await fetch(`http://${API_URL}/users/update/` + id,authorization);
            if (!update.ok){
                throw new Error('Something wrong during the communication with server');
            }
            const data = await update.json();
            navigation.navigate('My Space');           
        }catch (error){
            console.error('Error:', error);
            Alert.alert('We cannot update your message at this moment')
        }
  }

  return (
    <View>      
        <Card>
            <TextInput style={{height: 200}} placeholder="Please revise experience here." onChangeText={message1 => setForm({ ...form, message1 })} />            
        </Card>
        <Card>
            <TextInput style={{height: 200}} placeholder="Please type your comment here." onChangeText={message2 => setForm({ ...form, message2 })} />            
            <Button style={styles.button} status='warning' onPress={()=>handleUpdate(route.params.id)} >
               Post your Comment
            </Button>
        </Card>        
    </View>
 
  )
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 2
  },
  inputTextStyle: {
    minHeight: 64
  },
  button: {
    margin: 12,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})



