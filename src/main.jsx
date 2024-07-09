import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, SwitchGroup } from "@mantine/core";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./styles/global.css";
import theme from "./styles/theme.js";
import { ShopContextProvider } from "./helpers/context/shop-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
