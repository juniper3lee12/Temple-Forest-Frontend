import { Text, View } from 'react-native';
import { GlobalStyles } from "../styles/global";


export default function Login() {
    const globalStyles = GlobalStyles();


    return (
        <View>
            <Text style={globalStyles.text}>
               o	To enable authentication.
               o	Username and password are enough. Passwords must be encrypted in the database.

            </Text>
        </View>
    )
}