import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";

// @ts-ignore
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { App } from "./App";
import "simplebar-react/dist/simplebar.min.css";
import "./fonts/fonts.css";
import { GlobalStyles } from "./GlobalStyles";
import { PluginThemeProvider } from "./plugin/PluginThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PluginThemeProvider>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </PluginThemeProvider>
  </React.StrictMode>
);


serviceWorkerRegistration.register({
    onUpdate: (registration: { waiting: { postMessage: (arg0: { type: string; }) => void; }; }) => {
        if (registration && registration.waiting) {
            registration.waiting.postMessage({type: 'SKIP_WAITING'});
        }
        window.location.reload();
    }
});