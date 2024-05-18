import React from 'react';
import { Input, InputProps } from '@ui-kitten/components';
import { StyleSheet } from "react-native";



const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};


export default function Note () {

  const multilineInputState = useInputState();  

  return (
     <Input
        multiline={true}
        textStyle={styles.inputTextStyle}
        placeholder='Multiline'
        {...multilineInputState}
      />    

      
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
  inputTextStyle: {
    minHeight: 64,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
});