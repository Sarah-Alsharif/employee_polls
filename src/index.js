import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

