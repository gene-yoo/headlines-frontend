import React from "react";
import FeedItem from "./FeedItem";
import api from "../services/api";

class FeedContainer extends React.Component {
	componentDidMount() {
		this.props.getFeed();
	}

	render() {
		const itemsArray = this.props.feed.map(article => (
			<FeedItem key={article.url} article={article} />
		));
		return (
			<div className="ui sixteen wide center aligned container">
				<h1 className="ui header">FeedContainer</h1>
				<br />
				<br />
				<div className="ui feed">{itemsArray}</div>
			</div>
		);
	}
}

export default FeedContainer;
