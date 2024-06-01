import { View } from 'react-native';
import { Avatar, Divider, Text } from '@ui-kitten/components';
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from '../context/theme';

//This child component shows a quote from Buddha.

export default function Dividericon (){
 const globalStyles = GlobalStyles(); 

    return  (
        <>
    <View>
      <ThemeProvider>
      <Avatar
        size='giant'
        source={require('../../Front-end/assets/meditate4.png')}
      />
      <Text
        style={globalStyles.text}
        category='h6'
      >
        When it hurts observe, life is trying to teach you something.
      </Text>
      </ThemeProvider>
    </View>
    <Divider />    
  </>
    )
    
} 



  
   