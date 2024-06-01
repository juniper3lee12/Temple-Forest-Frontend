import { View, Button, Image, Text, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { GlobalStyles } from "../styles/global";
import * as React from 'react';
import { useState } from 'react';
import Constants from "expo-constants";
import { useNavigation} from '@react-navigation/native';

// Express erver and expo app need to be in the same port localhost:3001
const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export default function Login() {
    
  const globalStyles = GlobalStyles();
  const [form, setForm] = useState({ email: '', password: '',  });  
  const navigation = useNavigation();  

  async function handleLogin() {  
    
    // POST request gets email and password entered by the user and send them to the server

    fetch(`http://${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify({ 
            "email":form.email,
            "password":form.password            
      }),
      headers: {
        "Content-type": "application/json"
      }
    })    
    .then((res) => res.json())
    .then((res) => { 
      console.log(res);
      if(res.status == 'ok') {
      Alert.alert('Thanks! We have logged you in.');            
      navigation.navigate('My Space', {token: res.token}); // After login sucessful navigate to MySpace screen and pass token to MySpace 
    }else{      
      Alert.alert('Oops...Something is wrong.');
    }
    })
    .catch((error)=>{ 
      console.error('Error:', error);
      Alert.alert('We cannot process your sign in'); // Error handling
    });   
    
  }

  return (
        
    <View style ={styles.container}>          
      <View styles={styles.header}>
          <Image resizeMode="contain" style={styles.headerImg} source={require('../../Front-end/assets/Login-icon.png')} / >
          <Text style={[styles.title,globalStyles.text]}>Login to TempleForest</Text>                     
          <Text style={[styles.subtitle, globalStyles.text]}>Please enter your email address and password</Text>               
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
            <Text style={[styles.inputLabel,globalStyles.text]}>Email address</Text>
                <TextInput 
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="email-address"
                  onChangeText={email => setForm({ ...form, email })} // email
                  placeholder="john@example.com"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.email} /> 
        </View>
      <View style={styles.input}>
          <Text style={[styles.inputLabel,globalStyles.text]}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}  // password
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
        </View>
      </View>
      <View style={styles.formAction}>
        {/* Call handleLogin here  */}
        <TouchableOpacity onPress={()=>handleLogin()}>    
         <View style={styles.btn}>
          <Text style={styles.btnText}>Sign in</Text>
         </View>                
        </TouchableOpacity>
      </View>
      <Button  title="Back"  onPress={() => { navigation.goBack(); }} /> 
    </View>     
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },  
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
    
  },
  headerImg: {
    width: 120,
    height: 150,
    alignSelf: 'center',
    marginBottom: 36,
  },  
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },  
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },  
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});