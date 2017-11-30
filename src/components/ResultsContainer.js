import React from "react";
import ResultItem from "./ResultItem";

class ResultsContainer extends React.Component {
	render() {
		const itemsArray = this.props.results.map(article => (
			<ResultItem key={article.url} article={article} />
		));
		return (
			<div className="ui sixteen wide center aligned container">
				<h1 className="ui header">ResultsContainer</h1>
				<br />
				<br />
				<div className="ui feed">{itemsArray}</div>
			</div>
		);
	}
}

export default ResultsContainer;
