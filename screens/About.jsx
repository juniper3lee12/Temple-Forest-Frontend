import { View } from 'react-native';
import { ThemeProvider } from '../context/theme';
import { GlobalStyles } from "../styles/global";
import { Layout, Text, Avatar } from '@ui-kitten/components';


export default function About() {
    const globalStyles = GlobalStyles();

    return (
        <View>
            <ThemeProvider>
            <Text style={globalStyles.text}>
                This app aims to integrate meditation praactices with mindful eating habits to enhance overall well-being and efficiency.
                - Mindful Eating Tracker
                - Meal Planning and Receipes: This feature provide meal planning from a database of healthy recipes that align with mindful eating principles. Users can edit personalised meal plans based on their preferences.  
                - Integration with meditation practices: This feature prompts users to engage in mindfulness exercises or breathing techniques to cultivate a sense of presence and gratitude.
                o	A view that describes the application.
                o	A list of open source licences (see npm-license-crawlerLinks to an external site.).

            </Text>
            </ThemeProvider>
        </View>
    )
}