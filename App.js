import React from "react";
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
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <ThemeProvider>
          {/* Always visit HomeScreen first */}
          <Drawer.Navigator initialRouteName="Home">
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
