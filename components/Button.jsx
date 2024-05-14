import { View } from 'react-native';
// import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Button, Text } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



export default function MeditateScreen({ navigation: {navigate}}) {
    const globalStyles = GlobalStyles(); 


  return (  
    
  <View>
    
    <Button o
    
      style={globalStyles.footerControl}
      size='small'
      onPress={() => navigate('Meditate')}
      title="Go to Journal"
    />  

  </View>  
  
   
  );
}

// function ButtonA() {
//   return (
//     <Link to={{ screen: 'Meditate', params: { id: 'Vipassana' } }}>
//       Try Vipassana
//     </Link>
//   );
// }


 // <Button
    //   title="Go meditate"
    //   onPress={() => {
    //     // Navigate using the `navigation` prop that you received
    //     navigation.navigate('Meditate');
    //   }}
    // ><Button/>




// export default function Button() {
//     const globalStyles = GlobalStyles();

//     return (
//         <View>
//             <NavigationContainer>

//             </NavigationContainer>
//         </View>
//     )
// }