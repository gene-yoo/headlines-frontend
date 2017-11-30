import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
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
			results: []
		};
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

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	render() {
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
					</Switch>
				</div>
			</div>
		);
	}
}

export default DistractifyContainer;
