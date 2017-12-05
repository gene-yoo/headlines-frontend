import React from "react";
import FeedItem from "./FeedItem";
import {
	Feed,
	Container,
	Header,
	Grid,
	Checkbox,
	Form
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
		this.props.getFeedMethod();
	}

	componentWillReceiveProps(nextProps) {
		this.props.checkLoggedIn();

		this.setState(
			{
				currentArticles: nextProps.feed.filter(article =>
					nextProps.currentSourceIds.includes(article.source.id)
				)
			},
			() =>
				console.log("inside will receive props: ", this.state.currentArticles)
		);
	}

	render() {
		const itemsSources = this.props.allSources.map(source => {
			return (
				<div>
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

		const itemsArray = this.state.currentArticles.map(article => (
			<FeedItem key={article.url} article={article} />
		));

		console.log(
			"rendering current articles inside Feed Container: ",
			itemsArray
		);

		return (
			<Container>
				<Grid>
					<Grid.Column width="4">
						<Header as="h1">Sources</Header>
						{itemsSources}
					</Grid.Column>
					<Grid.Column width="12">
						<Header as="h1">
							{this.props.searchTerm
								? `Showing search results for ${this.props.searchTerm}`
								: "Showing latest headlines"}
						</Header>
						<Feed>{itemsArray}</Feed>
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}

export default withRouter(FeedContainer);
