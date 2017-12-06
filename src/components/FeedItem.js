import React from "react";
import { withRouter } from "react-router-dom";
import {
	Item,
	Feed,
	Image,
	Button,
	Icon,
	Popup,
	Divider,
	Header
} from "semantic-ui-react";

const FeedItem = props => {
	let newsfeedButtons = (
		<Button.Group floated="right" style={{ height: "40px" }}>
			<Popup
				trigger={
					<Button
						value="save"
						style={{
							backgroundColor: "rgb(121, 178, 174)",
							color: "white"
						}}
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
						style={{
							backgroundColor: "rgb(121, 178, 174)",
							color: "white"
						}}
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
	);

	let profileButtons = (
		<Button.Group floated="right">
			<Button
				style={{
					backgroundColor: "rgb(121, 178, 174)",
					color: "white",
					height: "35px"
				}}
				onClick={() => {
					props.handleToggleArticleShare(props.article.id);
				}}
			>
				{props.article.public ? "Unshare" : "Share"}
			</Button>
			<Button.Or />
			<Button
				style={{
					backgroundColor: "rgb(121, 178, 174)",
					color: "white",
					height: "35px"
				}}
				onClick={() => {
					props.handleDeleteArticle(props.article.id);
				}}
			>
				Delete
			</Button>
		</Button.Group>
	);

	return (
		<Item style={{ paddingBottom: "20px" }}>
			{props.article.username ? (
				<div>
					<Item.Extra style={{ width: "115px" }}>
						{props.article.username} shared:
					</Item.Extra>
					<br />
				</div>
			) : null}
			<Item.Image
				src={props.article.urlToImage}
				size="small"
				verticalAlign="middle"
				style={{ height: "100%" }}
				rounded
				spaced="right"
			/>

			<Item.Content style={{ paddingRight: "10px" }}>
				<Item.Header>
					<a href={props.article.url}>{props.article.title}</a>
				</Item.Header>
				<Item.Meta>
					{props.article.publishedAt
						? new Date(props.article.publishedAt).toLocaleString()
						: null}
				</Item.Meta>
				<Item.Description>{props.article.description}</Item.Description>
			</Item.Content>

			{!props.article.user_id
				? newsfeedButtons
				: props.location.pathname === "/my_profile" ? profileButtons : null}
		</Item>
	);
};

export default withRouter(FeedItem);
