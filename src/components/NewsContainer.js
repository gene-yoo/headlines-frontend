import React from "react";
import FeedContainer from "./FeedContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "../services/api";
import { Segment } from "semantic-ui-react";

class NewsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myFeed: false,
			searchResults: false,
			networkFeed: false,
			feed: []
		};
	}

	render() {
		console.log("IN NEWS CONTAINER", this.props);
		return <Switch />;
	}
}

export default NewsContainer;

/*
<Switch>
  <Route
    path="/news"
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
*/
