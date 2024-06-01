import { GlobalStyles } from "../styles/global";
import * as React from 'react';
import { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Alert} from 'react-native';
import { Button, Layout, Text, Card } from '@ui-kitten/components';
import Dividericon from "../components/Divider";
import CalendarComponent from "../components/Calendar";
import Choice from "../components/ViewPager";
import Status from "../components/CheckBox";
import Constants from "expo-constants";


const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;



export default function Meditate({ navigation} ) {
    const globalStyles = GlobalStyles();
    const [formData, setFormdata] = useState({});
    

    const handleDateChange = useCallback ((selectedDate) => {      
      //Extract the date part from the datetime string as the format of date in MySQL is Year-Month-Date
      let dateObj = new Date(selectedDate);
      let year = dateObj.getFullYear();
      let month = (dateObj.getMonth() + 1).toString().padStart(2,'0');
      let day =dateObj.getDate().toString().padStart(2,'0');
      let dateStr = `${year}-${month}-${day}`;

      setFormdata(prevState => ({
        ...prevState,
        date: dateStr, //Update formData with the extracted date string
      }));
    },[]);

    const handleStatusChange = useCallback ((status) => {       
      setFormdata(prevState => ({
        ...prevState,
        goal: Number(status ? 1 : 0), //Need to be integer to follow MySQL format
      }));
    },[]);

     

    async function handleSubmit () {      
      fetch(`http://${API_URL}/meditate`, {
        method:"POST",
        body: JSON.stringify({
          "userID": formData.userID,
          "date":formData.date,
          "goal":formData.goal,
          "input1":formData.input1,
          "input2":formData.input2,
        }),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((res) => res.json())
      .then((res) => {        
        if(res.status =='ok'){
          Alert.alert('Thanks. Your post will be reviewed by our master!');
        }else{      
          Alert.alert('Oops...Something is wrong.');
        }
        })
        .catch((error)=>{
          console.error('Error:', error);
          Alert.alert('We cannot process your post');
        });   
    }
   

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
                   <CalendarComponent onDataChange={handleDateChange}/>
                 </Text>
             </Layout>
             <Layout>
              <Text category='h5'>Your Name: </Text>
              <TextInput style={{height: 50}} placeholder="My name is..." placeholderTextColor="#FFF" onChangeText={userID => setFormdata({ ...formData, userID })} ></TextInput>
             </Layout>
             <Layout style={styles.layout} level='2'>      
                   <Text style={globalStyles.title} category='h6'>
                     <Choice  />     
                   </Text>  
             </Layout>
             <Layout style={styles.layout} level='1'>
                 <Status onStatusChange={handleStatusChange} />
                 <Text style={globalStyles.text} >
                   Put a tick if you have achieved the goal.        
                 </Text> 
             </Layout>
             <Layout> 
                <View >      
                   <Card>
                    <Text style={globalStyles.text}>Please let the master know about your experience or any questions.</Text>
                       <TextInput style={{height: 100}} placeholder="What did you experience today?" placeholderTextColor="#FFF" onChangeText={input1 => setFormdata({ ...formData, input1 })} />                          
                   </Card>
                   <Card>
                    <Text style={globalStyles.text}>How can you make it better next time?</Text>
                       <TextInput style={{height: 100}} placeholder="How can you make it better next time?" placeholderTextColor="#FFF" onChangeText={input2 => setFormdata({ ...formData, input2 })} />                        
                   </Card>        
                 </View>       
                <View style={styles.container}>
                <Button title="Submit" onPress={handleSubmit} style={styles.button} size="small" status="success">Post experience</Button>                    
                <Button title="Back" style={styles.button} size="small" status="success" onPress={() => {navigation.goBack();}} >Back</Button>    
                </View>  
             </Layout>       
           </Layout> 
         </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    margin: 12,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  submitButtonSection: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
   },
});

