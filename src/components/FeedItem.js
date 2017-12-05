import React from "react";
import { Card, Feed, Image } from "semantic-ui-react";

const FeedItem = props => {
	return (
		<Feed.Event>
			<Image
				src={props.article.urlToImage}
				size="small"
				verticalAlign="middle"
				style={{ height: "100%" }}
			/>
			<Feed.Content>
				<Feed.Summary>
					<a href={props.article.url}>{props.article.title}</a>
					<Feed.Date>
						{new Date(props.article.publishedAt).toLocaleString()}
					</Feed.Date>
				</Feed.Summary>
				<Feed.Extra text>{props.article.description}</Feed.Extra>
			</Feed.Content>
		</Feed.Event>
	);
};

export default FeedItem;
