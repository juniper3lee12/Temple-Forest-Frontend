import { GlobalStyles } from "../styles/global";
import * as React from 'react';
import { Button, View, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Layout, Text, Avatar } from '@ui-kitten/components';
import Dividericon from "../components/Divider";
import CalendarComponent from "../components/Calendar";
import Choice from "../components/ViewPager";
import Status from "../components/CheckBox";
import Note from "../components/Note";
import Btn from "../components/Button";
import Form from "../components/Form";


export default function Meditate({ navigation} ) {
    const globalStyles = GlobalStyles();
    


    return (

  <ScrollView style={globalStyles.scrollView}>
    <Layout style={globalStyles.container1}>

      <Layout style={globalStyles.layout} level='4' >
        <Text> 
          <Dividericon/>
        </Text>
      </Layout>

      <Layout style={styles.layout} level='3' >
        <Text>
          <CalendarComponent/>
        </Text>
      </Layout>

      <Layout style={styles.layout} level='2'>      
        <Text style={globalStyles.title} category='h6'>
          <Choice />     
        </Text>  
      </Layout>

      <Layout style={styles.layout} level='1'>
        <Status/>
        <Text style={globalStyles.text} >
          Put a tick if you have achieved the goal.        
        </Text> 
      </Layout>

      <Layout>        
          <Form />     
          <Button title="Back" onPress={() => {navigation.goBack();}}  />       
      </Layout>       
    </Layout> 
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

