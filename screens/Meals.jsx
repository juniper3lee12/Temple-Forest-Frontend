import { Text, View } from 'react-native';
import { GlobalStyles } from "../styles/global";


export default function Meals() {
    const globalStyles = GlobalStyles();


    return (
        <View>
            <Text style={globalStyles.text}>
               Meals

            </Text>
        </View>
    )
}