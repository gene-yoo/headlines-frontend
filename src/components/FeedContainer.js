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

class FeedContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isSearchResults: false,
			allArticles: [],
			currentArticles: [],
			sources: { on: [], off: [] }
		};

		this.handleToggleSource = this.handleToggleSource.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			let filtered = {};

			[
				...this.state.currentArticles.map(article => article.source)
			].forEach(src => {
				if (!Object.keys(filtered).includes(src.id)) {
					filtered[src.id] = src;
				}
			});

			let updatedSources = [...Object.values(filtered)];

			this.setState(
				{
					allArticles: [...nextProps.feed],
					currentArticles: [...nextProps.feed],
					sources: { on: [...updatedSources], off: [] }
				},
				() => console.log(this.state.allArticles)
			);
		}
	}

	handleToggleSource(ev) {
		console.log(ev.target);

		let updated = updatedSources.filter(
			article => article.id !== ev.target.parentElement.firstChild.value
		);

		this.setState({
			currentArticles: updated
		});
	}

	render() {
		// console.log("rendering feed container");
		console.log("FC state is: ", this.state.currentArticles);

		let filtered = {};

		let sources = [
			...this.state.currentArticles.map(article => article.source)
		].forEach(src => {
			if (!Object.keys(filtered).includes(src.id)) {
				filtered[src.id] = src;
			}
		});

		let updatedSources = [...Object.values(filtered)];

		const itemsSources = updatedSources.map(source => {
			return (
				<div>
					<Checkbox
						toggle
						defaultChecked
						value={source.id}
						label={source.name}
						onChange={this.handleToggleSource}
					/>
				</div>
			);
		});

		const itemsArray = this.state.currentArticles.map(article => (
			<FeedItem key={article.url} article={article} />
		));

		// console.log("items sources are: ", itemsSources);
		// console.log("items array is: ", itemsArray);

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

export default FeedContainer;
