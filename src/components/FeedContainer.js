import React from "react";
import FeedItem from "./FeedItem";
import {
	Feed,
	Container,
	Header,
	Grid,
	Checkbox,
	Form,
	Item,
	Divider
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class FeedContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isSearchResults: false,
			currentArticles: []
		};
	}

	componentDidMount() {
		this.props.checkLoggedIn();
		if (this.props.user.username) {
			this.props.getFeedMethod();
		}
	}

	componentWillReceiveProps(nextProps) {
		this.props.checkLoggedIn();
		if (nextProps.history.location.pathname === "/network") {
			if (this.props.location.pathname !== "/network") {
				nextProps.getFeedMethod();
			} else {
				this.setState({ currentArticles: nextProps.feed });
			}
		} else if (this.props.history.location.pathname === "/feed") {
			this.setState({
				currentArticles: nextProps.feed.filter(article =>
					nextProps.currentSourceIds.includes(article.source.id)
				)
			});
		} else {
			this.setState({
				currentArticles: nextProps.feed
			});
		}
	}

	handleToggleSource(ev) {
		let updated = this.state.sources.on.filter(
			article => article.id !== ev.target.parentElement.firstChild.value
		);
	}

	render() {
		let itemsSources = [];
		if (this.props.history.location.pathname === "/feed") {
			itemsSources = this.props.allSources.map(source => {
				return (
					<div key={source.id} style={{ paddingBottom: "5px" }}>
						<Checkbox
							toggle
							checked={this.props.currentSourceIds.includes(source.id)}
							value={source.id}
							label={source.name}
							onClick={this.props.handleToggleSource}
						/>
					</div>
				);
			});
		}
		const itemsArray = this.state.currentArticles.map(article => {
			if (!article.urlToImage) {
				article = Object.assign({}, article, { urlToImage: article.image_url });
			}

			return (
				<FeedItem
					key={article.url}
					article={article}
					handleShare={this.props.handleShare}
				/>
			);
		});

		return (
			<Container>
				<Grid>
					{this.props.history.location.pathname === "/feed" ? (
						<Grid.Column width="4">
							<Header as="h2">Filter Sources:</Header>
							{itemsSources}
						</Grid.Column>
					) : (
						<div />
					)}

					<Grid.Column width="12">
						<Header as="h2">
							{this.props.searchTerm
								? `Showing search results for ${this.props.searchTerm}`
								: this.props.history.location.pathname !== "/network"
									? "Showing Top Headlines: "
									: "Articles Shared By The Distractify Network"}
						</Header>
						<Item.Group>{itemsArray}</Item.Group>
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}

export default withRouter(FeedContainer);
