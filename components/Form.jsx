import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { Layout } from '@ui-kitten/components';


export default function Form () {
    
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      inpput1: '',
      input2: ''
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);


    return (
        
        <View style={styles.container}>
            
      <Text style={styles.label}>Enter your experience below?</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="input1"
        rules={{ required: true }}
      />
      <Text style={styles.label}>How can you make it better next time?</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="input2"
        rules={{ required: true }}
      />

      
      <Layout style={styles.layout}>

        <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
              input1: '',
              input2: ''
            })
          }}
        />
      </View>

        <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Submit form"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      </Layout>
      

      
    </View>
        
  

        
    )
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    width: 190,
    backgroundColor: '#ec5990',
    borderRadius: 4,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});