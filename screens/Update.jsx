import React, { useState } from "react"
import { StyleSheet, View, TextInput } from "react-native"
import { Input, Text,Card, Button, InputProps } from "@ui-kitten/components"
import { useNavigation, useRoute} from '@react-navigation/native';
import Constants from "expo-constants";

const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;




export default function Update() {
  
  const route = useRoute();
  const [form, setForm] = useState({ message1: '', message2:  ''}); 
   const [text, setText] = useState('');
  // const [notes, setNotes] = useState([]); 
  // const multilineInputState = useInputState();

  const handleUpdate = async (id) => {
        // const token = await getToken();
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
                throw new Error('Network response was not ok');
            }
            const data = await update.json();
            console.log(route.params.token)
            console.log(data);
            console.log("Response is " + data);
            // Update the state to remove the deleted note
            // setNotes(notes.filter(note => note.id !== id));

        }catch (error){
            console.error('Error:', error);
        }
  }

 



  return (

    <View>      
        <Card>
            <TextInput style={{height: 200}} placeholder="Please revise experience here." onChangeText={message1 => setForm({ ...form, message1 })} defaultValue={text} />
            {/* <Input multiline={true} textStyle={styles.inputTextStyle} placeholder="Please revise experience here." {...multilineInputState} onChangeText={input1 => setForm({ ...form, input1 })} />             */}
        </Card>
        <Card>
            <TextInput style={{height: 200}} placeholder="Please type your comment here." onChangeText={message2 => setForm({ ...form, message2 })} defaultValue={text} />
            {/* <Input multiline={true} textStyle={styles.inputTextStyle} placeholder="Please type your comment here." {...multilineInputState} onChangeText={input2 => setForm({ ...form, input2 })} /> */}
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



