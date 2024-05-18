// import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, SafeAreaView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default function Btn() {
    const globalStyles = GlobalStyles(); 


  return (  
    <View style={styles.formAction}>
                   <TouchableOpacity onPress={() => { }}>    
                
                    <View style={styles.btn}>
                       <Text style={styles.btnText}>Submit</Text>
                    </View>
                   </TouchableOpacity>
                </View>
    
  
  
   
  );
}

const styles = StyleSheet.create({
   formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
});

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