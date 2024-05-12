import { Text, View } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";


export default function About() {
    const globalStyles = GlobalStyles();

    return (
        <View>
            <ThemeProvider>
            <Text style={globalStyles.text}>
                o	A view that describes the application.
                o	A list of open source licences (see npm-license-crawlerLinks to an external site.).

            </Text>
            </ThemeProvider>
        </View>
    )
}