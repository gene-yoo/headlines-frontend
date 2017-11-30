import React from "react";

const ResultItem = props => {
	return (
		<div className="event large center aligned">
			<div className="label">
				<img className="ui small image" src={props.article.urlToImage} alt="" />
			</div>
			<div className="content">
				<div className="summary">{props.article.title}</div>
				<div className="extra text">{props.article.description}</div>
				<br />
				<div className="date">{props.article.publishedAt}</div>
			</div>
		</div>
	);
};

export default ResultItem;
