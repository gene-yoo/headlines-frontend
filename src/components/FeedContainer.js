import React from "react";
import FeedItem from "./FeedItem";
import api from "../services/api";
import { Feed, Container, Header } from "semantic-ui-react";

class FeedContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isSearchResults: false
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps.feed !== this.props.feed);
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

export default FeedContainer;
