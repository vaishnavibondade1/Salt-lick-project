import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App"
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
import { StateProvider } from "./context/StateProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>
);
