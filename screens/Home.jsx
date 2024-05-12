import { Text, View } from 'react-native';
import { GlobalStyles } from "../styles/global";


export default function Login() {
    const globalStyles = GlobalStyles();

    return (
        <View>
            <Text style={globalStyles.text}>
                Content is here
            </Text>
        </View>
    )
}