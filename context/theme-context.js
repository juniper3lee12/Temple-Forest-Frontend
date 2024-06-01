import React from "react";

// Background color
export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});
