import React from "react";
import FeedItem from "./FeedItem";
import { Header, Feed, List, Button, Grid } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";

class Profile extends React.Component {
	render() {
		debugger;
		let articles = this.props.user.articles.map(article => {
			let articleData = {
				id: article.id,
				title: article.title,
				description: article.description,
				author: article.author,
				publishedAt: article.published_at,
				urlToImage: article.image_url,
				url: article.url,
				public: article.public,
				user_id: article.user_id
			};
			return (
				<FeedItem
					key={article.url}
					article={articleData}
					handleShare={this.props.handleShare}
					handleDeleteArticle={this.props.handleDeleteArticle}
					handleToggleArticleShare={this.props.handleToggleArticleShare}
					user={this.props.user}
				/>
			);
		});

		let sources = this.props.user.sources.map(src => {
			return (
				<List.Item key={src.id}>
					<List.Content>
						<List.Header onClick={() => window.open(src.source_url)}>
							{src.name}
						</List.Header>
					</List.Content>
				</List.Item>
			);
		});

		return (
			<div>
				<Header as="h1" align="center">
					{`My Profile - ${this.props.user.username}`} <br />{" "}
					<Link to="/my_profile/edit">Edit Profile</Link>
				</Header>
				<br />
				<Grid width="16">
					<Grid.Row>
						<Grid.Column width="4" align="center">
							<Header as="h3">My Favorite News Sources</Header>
							<List selection verticalAlign="middle">
								{sources}
							</List>
						</Grid.Column>
						<Grid.Column width="8" align="center">
							<Header as="h3">My Saved Articles</Header>
							<Feed width="8">{articles.sort((a, b) => b.id - a.id)}</Feed>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default withRouter(Profile);
