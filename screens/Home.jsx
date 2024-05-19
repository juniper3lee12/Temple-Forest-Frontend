import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Avatar } from '@ui-kitten/components';
import Dividericon from "../components/Divider";
import CardAccessories from "../components/Cards";
import { ThemeProvider, useNavigation } from '@react-navigation/native';


export default function Home() {
    const globalStyles = GlobalStyles(); 
    const navigation = useNavigation();

    
    return (
      <ThemeProvider>
         <ScrollView style={globalStyles.scrollView}>

         <Layout style={globalStyles.container1}>

    <Layout
      style={globalStyles.layout}
      level='4'
    >
      <Text>
        <Dividericon/>
4
      </Text>
    </Layout>

    <Layout
      style={globalStyles.layout}
      level='3'
    >
      <Text>
        <CardAccessories/>
3
      </Text>
    </Layout>

    <Layout
      style={styles2.layout}
      level='2'
    >
      <TouchableOpacity style={styles2.button} onPress={() => navigation.navigate('Login')}>
      <Avatar
        size='giant'
        source={require('../../Front-end/assets/Login-icon.png')}
      />
      </TouchableOpacity>
      <Text
        style={globalStyles.title}
        category='h6'
      >
        Login/Sign-up
        
      </Text>
      
      
    
    </Layout>

    <Layout
      style={styles2.layout}
      level='1'
    >
      <Text>
        1
      </Text>
      
    </Layout>

  </Layout>
  </ScrollView>
  </ThemeProvider>
    );
};

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
