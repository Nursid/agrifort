import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react"; 
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
   <ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ThemeProvider>

  </React.StrictMode>
);

reportWebVitals();
