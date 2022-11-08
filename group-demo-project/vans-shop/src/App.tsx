import React from "react";
import withStyles, { ThemeProvider } from "react-jss";
import AppRoutes from "./common/routes";
import theme from "./common/theme";
import baseStyles from "./common/theme/baseStyles";

const App = withStyles(baseStyles)(AppRoutes);

const AppRoot: React.FC = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default AppRoot;
