import React from "react";
import FeedItem from "./FeedItem";
import { Feed, Container, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class FeedContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isSearchResults: false
		};
	}
	componentDidMount() {
		this.checkLoggedIn();
	}

	componentWillReceiveProps(nextProps) {
		this.checkLoggedIn();
	}

	checkLoggedIn() {
		if (
			this.props.history.location.pathname === "/feed" &&
			localStorage.length === 0
		) {
			this.props.history.push("/login");
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.feed !== this.props.feed;
	}

	render() {
		const itemsArray = this.props.feed.map(article => (
			<FeedItem key={article.url} article={article} />
		));
		return (
			<Container>
				<Header as="h1">
					{this.props.searchTerm
						? `Showing search results for ${this.props.searchTerm}`
						: "Showing latest headlines"}
				</Header>
				<br />
				<br />
				<Feed>{itemsArray}</Feed>
			</Container>
		);
	}
}

export default withRouter(FeedContainer);
