import { StyleSheet, View } from 'react-native';
import { Avatar, Divider, Text } from '@ui-kitten/components';
import { GlobalStyles } from "../styles/global";



const quotes = [
  {
    key: "1",
    name: "HomeQuote",
    info: "When it hurts observe, life is trying to teach you something.",
    
    
  },
  {
    key: "2",
    name: "MeditateQuote",
    info: "Suffering is not holding you, you are holding suffering.",
    
  },
  
];




export default function Dividericon (){
 const globalStyles = GlobalStyles(); 

    return  (
        <>
    <View style={globalStyles.details}>
      <Avatar
        size='giant'
        source={require('../../Front-end/assets/meditate4.png')}
      />
      <Text
        style={globalStyles.title}
        category='h6'
      >
        When it hurts observe, life is trying to teach you something.
      </Text>
    </View>
    <Divider />
    
  </>
    )
    
} 


