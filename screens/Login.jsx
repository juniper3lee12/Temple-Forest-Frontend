import { View, Button, SafeAreaView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export default function Login({navigation}) {
    
    const globalStyles = GlobalStyles();
    const [form, setForm] = useState({ email: '', password: '',  });


    return (
        
            <View style ={styles.container}>
                <View styles={styles.header}>
                    <Image resizeMode="contain" style={styles.headerImg} source={require('../../Front-end/assets/Login-icon.png')} / >
                        <Text style={styles.title}>
                            Login to TempleForest                            
                        </Text>                      

                        <Text style={styles.subtitle}>
                         Some text
                        </Text>                  

                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email address</Text>
                        <TextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        keyboardType="email-address"
                        onChangeText={email => setForm({ ...form, email })}
                        placeholder="john@example.com"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={form.email} /> 
                    </View>

                    <View style={styles.input}>
                       <Text style={styles.inputLabel}>Password</Text>
                       <TextInput
                      autoCorrect={false}
                      clearButtonMode="while-editing"
                      onChangeText={password => setForm({ ...form, password })}
                      placeholder="********"
                      placeholderTextColor="#6b7280"
                      style={styles.inputControl}
                      secureTextEntry={true}
                      value={form.password} />
                    </View>
                </View>

                <View style={styles.formAction}>
                   <TouchableOpacity onPress={() => { }}>    
                
                    <View style={styles.btn}>
                       <Text style={styles.btnText}>Sign in</Text>
                    </View>
                   </TouchableOpacity>
                </View>
            

            <Text style={globalStyles.text}>
               {/* o	To enable authentication.
               o	Username and password are enough. Passwords must be encrypted in the database. */}

            </Text>

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
  /** Header */
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
  /** Form */
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
  /** Input */
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
  /** Button */
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