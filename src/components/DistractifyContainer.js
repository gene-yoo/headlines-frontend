import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import FeedContainer from "./FeedContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../services/api";
import { Segment } from "semantic-ui-react";

class DistractifyContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			feed: [],
			searchTerm: "",
			results: [],
			sources: [],
			categories: [],
			signUpTerms: {
				username: "",
				password: "",
				passwordConfirmation: "",
				preferredSources: [],
				preferredCategories: []
			},
			loginTerms: {
				username: "",
				password: ""
			}
		};
	}

	componentDidMount() {
		api
			.getAllSourcesAndCategories()
			.then(res =>
				this.setState({ sources: res.sources, categories: res.categories })
			);
	}

	getFeed() {
		api.getFeed().then(json => this.setFeed(json));
	}

	setFeed(json) {
		this.setState({ feed: json.articles });
	}

	handleSearchTerm(ev) {
		this.setState({ searchTerm: ev.target.value });
	}
	handleSearch() {
		api
			.search(this.state.searchTerm)
			.then(res => res.json())
			.then(json => this.setResults(json));
		// this.setState({ searchTerm: "" });
	}

	setResults(json) {
		this.props.history.push("/results");
		this.setState({ results: json.articles });
	}

	handleSignUpTerms(event) {
		this.setState({
			signUpTerms: {
				...this.state.signUpTerms,
				[event.target.name]: event.target.value
			}
		});
	}

	handleSignUpCheckboxes(event) {
		let collection = this.state.signUpTerms[event.target.name];

		if (event.target.checked) {
			collection.push(parseInt(event.target.value));
		} else {
			collection = collection.filter(
				item => item !== parseInt(event.target.value)
			);
		}

		this.setState({
			signUpTerms: {
				...this.state.signUpTerms,
				[event.target.name]: collection
			}
		});
	}

	handleSignupSubmit(event) {
		event.preventDefault();
		api.postNewUser(this.state.signUpTerms, this.props.loginMethod);
	}

	handleLoginTerms(event) {
		this.setState(
			{
				loginTerms: {
					...this.state.loginTerms,
					[event.target.name]: event.target.value
				}
			},
			() => console.log(this.state.loginTerms)
		);
	}

	handleLoginSubmit(event) {
		event.preventDefault();
		api.loginUser(this.state.loginTerms, this.props.loginMethod);
	}

	render() {
		return (
			<div>
				<NavBar
					searchTerm={this.state.searchTerm}
					user={this.props.user}
					handleSearchTerm={this.handleSearchTerm.bind(this)}
					handleSearch={this.handleSearch.bind(this)}
					handleLogout={this.props.logoutMethod}
				/>
				<Segment attached="bottom">
					<Switch>
						<Route
							path="/results"
							render={() => {
								return (
									<FeedContainer
										feed={this.state.results}
										searchTerm={this.state.searchTerm}
									/>
								);
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
						<Route
							path="/login"
							render={() => (
								<Login
									handleLoginTerms={this.handleLoginTerms.bind(this)}
									handleLoginSubmit={this.handleLoginSubmit.bind(this)}
									loginTerms={this.state.loginTerms}
								/>
							)}
						/>
						<Route
							path="/signup"
							render={() => {
								return (
									<SignUp
										categories={this.state.categories}
										sources={this.state.sources}
										signUpTerms={this.state.signUpTerms}
										handleSignUpTerms={this.handleSignUpTerms.bind(this)}
										handleSignUpCheckboxes={this.handleSignUpCheckboxes.bind(
											this
										)}
										handleSignupSubmit={this.handleSignupSubmit.bind(this)}
									/>
								);
							}}
						/>
					</Switch>
				</Segment>
			</div>
		);
	}
}

export default withRouter(DistractifyContainer);
