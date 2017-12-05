import React from "react";
import FeedItem from "./FeedItem";
import { Header, Feed, List, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {
	componentDidMount() {
		this.props.checkLoggedIn();
	}

	render() {
		let articles = this.props.user.articles.map(article => {
			let articleData = {
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
				/>
			);
		});

		let sources = this.props.user.sources.map(src => {
			return (
				<List.Item>
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
				<Header as="h1">{`My Profile - ${this.props.user.username}`}</Header>
				<Header as="h3">My Favorite News Sources</Header>
				<List selection verticalAlign="middle">
					{sources}
				</List>
				<Header as="h3">My Saved Articles</Header>
				<Feed>{articles}</Feed>
				<Button
					onClick={ev => {
						this.props.history.push("/my_profile/edit");
					}}
				>
					Edit Profile
				</Button>
			</div>
		);
	}
}

export default withRouter(Profile);
