import React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import FeedContainer from "./FeedContainer";
import HomeContainer from "./HomeContainer";
import EditProfile from "./EditProfile";
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
			allSources: [],
			currentSourceIds: [],
			networkFeed: []
		};

		this.getFeed = this.getFeed.bind(this);
	}

	componentDidMount() {
		// setInterval(this.getFeed, 10000);
		if (this.props.user.username) {
			this.getFeed();
		}
	}

	checkLoggedIn() {
		if (
			(this.props.history.location.pathname === "/feed" ||
				this.props.history.location.pathname === "/network") &&
			localStorage.length === 0
		) {
			this.props.history.push("/login");
		}
	}

	handleSearch(term) {
		this.setState({ searchTerm: term });
		api
			.search(term)
			.then(res => res.json())
			.then(json => this.setResults(json));
		// this.setState({ searchTerm: "" });
	}

	handleSignupSubmit(signupCredentials) {
		api.postNewUser(signupCredentials, this.props.loginMethod);
	}

	handleLoginSubmit(loginCredentials) {
		api.loginUser(loginCredentials, this.props.loginMethod);
	}

	handleEditProfile(info) {
		api.editUser(info, this.props.updateUserMethod);
	}

	handleToggleSource(ev) {
		let updatedSourceIds = [...this.state.currentSourceIds];

		if (updatedSourceIds.includes(ev.currentTarget.firstChild.value)) {
			updatedSourceIds = updatedSourceIds.filter(
				id => id !== ev.currentTarget.firstChild.value
			);
		} else {
			updatedSourceIds.push(ev.currentTarget.firstChild.value);
		}

		this.setState(
			{
				currentSourceIds: updatedSourceIds
			},
			() => console.log(this.state.currentSourceIds)
		);
	}

	handleShare(article, value) {
		if (this.props.user.username) {
			api.postNewArticle(
				article,
				value,
				this.props.user,
				this.props.updateUserMethod
			);
		} else {
			alert("You must be logged in to save or share an article!");
		}
	}

	handleToggleArticleShare(articleId) {
		api.updateArticle(articleId, this.props.updateUserMethod);
	}
	handleDeleteArticle(articleId, userId) {
		api.deleteArticle(articleId, this.props.updateUserMethod);
	}

	getFeed() {
		api.getFeed(this.props.user).then(json => this.setFeed(json));
	}

	setFeed(json) {
		let articles = json.articles
			.filter(art => true && art.publishedAt)
			.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

		let sources = {};

		articles.map(article => article.source).forEach(src => {
			if (!Object.keys(sources).includes(src.id)) {
				sources[src.id] = src;
			}
		});

		sources = [...Object.values(sources)].sort((a, b) =>
			a.id.localeCompare(b.id)
		);

		this.setState({
			feed: articles,
			allSources: sources,
			currentSourceIds: sources.map(src => src.id)
		});
	}

	setResults(json) {
		this.props.history.push("/results");

		let articles = json.articles
			.filter(art => true && art.publishedAt)
			.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

		this.setState({ results: articles });
	}

	getNetworkFeed() {
		api.getNetworkFeed().then(res => this.setNetworkFeed(res));
	}

	setNetworkFeed(res) {
		this.setState({ networkFeed: res });
	}

	render() {
		let other = (
			<div>
				<NavBar
					searchTerm={this.state.searchTerm}
					user={this.props.user}
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
										checkLoggedIn={this.checkLoggedIn.bind(this)}
										handleShare={this.handleShare.bind(this)}
										getFeedMethod={() => {}}
									/>
								);
							}}
						/>

						<Route
							path="/feed"
							render={() => {
								return (
									<FeedContainer
										feed={this.state.feed}
										user={this.props.user}
										getFeedMethod={this.getFeed.bind(this)}
										handleToggleSource={this.handleToggleSource.bind(this)}
										allSources={this.state.allSources}
										currentSourceIds={this.state.currentSourceIds}
										checkLoggedIn={this.checkLoggedIn.bind(this)}
										handleShare={this.handleShare.bind(this)}
									/>
								);
							}}
						/>
						<Route
							path="/network"
							render={() => (
								<FeedContainer
									feed={this.state.networkFeed}
									user={this.props.user}
									getFeedMethod={this.getNetworkFeed.bind(this)}
									allSources={this.state.allSources}
									currentSourceIds={this.state.currentSourceIds}
									checkLoggedIn={this.checkLoggedIn.bind(this)}
								/>
							)}
						/>

						<Route
							path="/login"
							render={() => (
								<Login handleLoginSubmit={this.handleLoginSubmit.bind(this)} />
							)}
						/>

						<Route
							path="/signup"
							render={() => (
								<SignUp
									handleSignupSubmit={this.handleSignupSubmit.bind(this)}
								/>
							)}
						/>

						<Route
							path="/my_profile/edit"
							render={() => (
								<EditProfile
									user={this.props.user}
									checkLoggedIn={this.checkLoggedIn.bind(this)}
									handleEditProfile={this.handleEditProfile.bind(this)}
								/>
							)}
						/>

						<Route
							exact
							path="/my_profile"
							render={() => (
								<Profile
									user={this.props.user}
									checkLoggedIn={this.checkLoggedIn.bind(this)}
									handleDeleteArticle={this.handleDeleteArticle.bind(this)}
									handleToggleArticleShare={this.handleToggleArticleShare.bind(
										this
									)}
								/>
							)}
						/>
					</Switch>
				</Segment>
			</div>
		);

		return this.props.location.pathname === "/welcome" ? (
			<HomeContainer handleSearch={this.handleSearch.bind(this)} />
		) : (
			other
		);
	}
}

export default withRouter(DistractifyContainer);
