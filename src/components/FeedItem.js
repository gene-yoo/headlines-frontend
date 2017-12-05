import React from "react";
import { Card, Feed, Image, Button, Icon, Popup } from "semantic-ui-react";

const FeedItem = props => {
	return (
		<Card fluid>
			<Feed.Event>
				<Image
					src={props.article.urlToImage}
					size="small"
					verticalAlign="middle"
					style={{ height: "100%" }}
					rounded
					spaced="right"
				/>
				<Feed.Content>
					<Feed.Summary>
						<a href={props.article.url}>{props.article.title}</a>
						<Feed.Date>
							{new Date(props.article.publishedAt).toLocaleString()}
						</Feed.Date>
					</Feed.Summary>
					<Feed.Extra text>{props.article.description}</Feed.Extra>
					{!props.article.user_id ? (
						<Button.Group floated="right">
							<Popup
								trigger={
									<Button
										value="save"
										color="red"
										size="mini"
										animated="vertical"
										onClick={ev => {
											ev.preventDefault();
											props.handleShare(props.article, false);
										}}
									>
										<Button.Content hidden>Save</Button.Content>
										<Button.Content visible>
											<Icon name="save" size="large" />
										</Button.Content>
									</Button>
								}
								content="Save this article to your profile."
								basic
							/>
							<Button.Or />
							<Popup
								trigger={
									<Button
										value="share"
										color="red"
										size="mini"
										animated="vertical"
										onClick={ev => {
											ev.preventDefault();
											props.handleShare(props.article, true);
										}}
									>
										<Button.Content hidden>Share</Button.Content>
										<Button.Content visible>
											<Icon name="share" />
										</Button.Content>
									</Button>
								}
								content="Save this article to your profile, and share with the entire distractify network."
								basic
								wide="very"
							/>
						</Button.Group>
					) : (
						<Button.Group floated="right">
							<Button
								onClick={() => {
									props.handleToggleArticleShare(props.article.id);
								}}
							>
								{props.article.public ? "unshare" : "share"}
							</Button>
							<Button
								onClick={() => {
									props.handleDeleteArticle(props.article.id);
								}}
							>
								Delete
							</Button>
						</Button.Group>
					)}
				</Feed.Content>
			</Feed.Event>
		</Card>
	);
};

export default FeedItem;
