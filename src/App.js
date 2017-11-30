import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import DistractifyContainer from "./components/DistractifyContainer";

class App extends Component {
	render() {
		console.log(process.env);
		return <Route path="/" component={DistractifyContainer} />;
	}
}

export default App;
