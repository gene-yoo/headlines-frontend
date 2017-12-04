import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";

// import dotenv from "dotenv";
// dotenv.config();
// console.log(dotenv);
// console.log(process.env.REACT_APP_API_KEY);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
registerServiceWorker();
