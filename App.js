import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "./screens/About";
import Login from "./screens/Login";
import Setting from "./screens/Setting";
import Meditate from "./screens/Meditate";
import MySpace from "./screens/MySpace";
import Update from "./screens/Update";
import Home from "./screens/Home";
import { ThemeProvider } from "./context/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Card } from "@ui-kitten/components";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <ThemeProvider>
          <Drawer.Navigator initialRouteName="Meditate">
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{ drawerLabel: "Home" }}
            />
            <Drawer.Screen
              name="Meditate"
              component={Meditate}
              options={{ drawerLabel: "Meditate" }}
            />
            <Drawer.Screen
              name="My Space"
              component={MySpace}
              options={{ drawerLabel: "MySpace" }}
            />
            <Drawer.Screen
              name="Update"
              component={Update}
              options={{ drawerLabel: "Update" }}
            />
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{ drawerLabel: "Login" }}
            />
            <Drawer.Screen
              name="About"
              component={About}
              options={{ drawerLabel: "About" }}
            />
            <Drawer.Screen
              name="Setting"
              component={Setting}
              options={{ drawerLabel: "Setting" }}
            />
          </Drawer.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { FontAwesome5 } from "@expo/vector-icons";

// import NewsScreen from "./screens/NewScreen";
// import SettingsScreen from "./screens/SettingScreen";

// import { ThemeProvider } from "./context/theme";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <ThemeProvider>
//         <Tab.Navigator
//           screenOptions={({ route }) => {
//             return {
//               tabBarIcon: ({ color, size }) => {
//                 let iconName;
//                 if (route.name === "News") {
//                   iconName = "newspaper";
//                 } else if (route.name === "Settings") {
//                   iconName = "cog";
//                 }
//                 return (
//                   <FontAwesome5 name={iconName} size={size} color={color} />
//                 );
//               },
//             };
//           }}
//         >
//           <Tab.Screen name="News" component={NewsScreen} />
//           <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//       </ThemeProvider>
//     </NavigationContainer>
//   );
// }
