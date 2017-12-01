import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import FeedContainer from "./FeedContainer";
import ResultsContainer from "./ResultsContainer";
import { Route, Switch } from "react-router-dom";
import api from "../services/api";

class DistractifyContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
			searchTerm: "",
			results: [],
			sources: [],
			categories: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3000/api/v1/signup")
			.then(res => res.json())
			.then(json =>
				this.setState({ sources: json.sources, categories: json.categories })
			);
	}

	getSignup() {
		let results = api.signupForm();
		console.log("results from distractify container: ", results);
	}

	getFeed() {
		console.log("getting feed");
		api.getFeed().then(json => this.setFeed(json));
	}
	setFeed(json) {
		this.setState({ feed: json.articles });
	}

	handleSearchTerm(ev) {
		this.setState({ searchTerm: ev.target.value });
	}
	handleSearch() {
		api.search(this.state.searchTerm).then(json => this.setResults(json));
		this.setState({ searchTerm: "" });
	}

	handleSignupSubmit(event) {
		event.preventDefault();
		console.log("handling signup submit");
	}

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<NavBar
					searchTerm={this.state.searchTerm}
					handleSearchTerm={this.handleSearchTerm.bind(this)}
					handleSearch={this.handleSearch.bind(this)}
				/>
				<br />
				<br />
				<br />
				<div className="ui bottom attached segment">
					<Switch>
						<Route
							path="/results"
							render={() => {
								return <ResultsContainer results={this.state.results} />;
							}}
						/>
						<Route
							path="/feed"
							render={() => {
								return (
									<FeedContainer
										getFeed={this.getFeed.bind(this)}
										feed={this.state.feed}
									/>
								);
							}}
						/>
						<Route path="/login" component={Login} />
						<Route
							path="/signup"
							render={() => {
								return (
									<SignUp
										categories={this.state.categories}
										sources={this.state.sources}
										handleSignupSubmit={this.handleSignupSubmit.bind(this)}
									/>
								);
							}}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default DistractifyContainer;
