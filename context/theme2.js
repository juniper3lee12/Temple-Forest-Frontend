// import React, {useState} from 'react';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
// import * as eva from '@eva-design/eva';
// import * as material from '@eva-design/material';

import { light } from "@eva-design/eva";

// export default Theme2 () => (
//   const [theme, setTheme] = useState()
//   <ApplicationProvider {...eva} theme={eva.light}>
//     <Layout>
//       <Button onPress={() => setTheme(material.light)}>
//         Siwtch to material
//       </Button>
//     </Layout>
//   </ApplicationProvider>
// );

//set light and dark mode

// import React from "react";
// import * as eva from "@eva-design/eva";
// import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
// import { EvaIconsPack } from "@ui-kitten/eva-icons";
// import { AppNavigator } from "./navigation.component";
// import { ThemeContext } from "./theme-context";

// export default () => {
//   const [theme, setTheme] = React.useState("light");

//   const toggleTheme = () => {
//     const nextTheme = theme === "light" ? "dark" : "light";
//     setTheme(nextTheme);
//   };

//   return (
//     <>
//       <IconRegistry icons={EvaIconsPack} />
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         <ApplicationProvider {...eva} theme={eva[theme]}>
//           <AppNavigator />
//         </ApplicationProvider>
//       </ThemeContext.Provider>
//     </>
//   );
// };
