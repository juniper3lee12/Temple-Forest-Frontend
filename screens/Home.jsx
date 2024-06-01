import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Avatar } from '@ui-kitten/components';
import Dividericon from "../components/Divider";
import CardAccessories from "../components/Cards";
import { ThemeProvider, useNavigation } from '@react-navigation/native';


export default function Home() {
    const globalStyles = GlobalStyles();  // Apply font size theme
    const navigation = useNavigation();    
    return (
      // Apply font size theme using ThemeProvider from theme.js
      <ThemeProvider> 
         <ScrollView>
          <Layout>
             <Layout style={globalStyles.layout} level='4'>      
               <Dividericon/>      
             </Layout>
             <Layout style={globalStyles.layout} level='3'>      
               <CardAccessories/>      
             </Layout>
             <Layout style={styles2.layout} level='2'>
                 <TouchableOpacity style={styles2.button} onPress={() => navigation.navigate('Login')}> 
                      <Avatar size='giant' source={require('../../Front-end/assets/meditate2.png')}/>
                      <Text style={globalStyles.text} category='h6'>Login/Sign-up</Text>
                 </TouchableOpacity>   
             </Layout>          
          </Layout>
         </ScrollView>
      </ThemeProvider>
  );
}; // Use ui-kitten layout to handle layout of the screen
   // Use components from components directory (e.g., dividericon and cards)

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
