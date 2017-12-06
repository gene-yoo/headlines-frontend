import React from "react";
import {
	Container,
	Input,
	Icon,
	Image,
	Form,
	Button,
	Header,
	Segment,
	Menu,
	Grid,
	Transition
} from "semantic-ui-react";

import { withRouter } from "react-router-dom";

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};
	}
	handleSearchTerm(ev) {
		this.setState({ searchTerm: ev.target.value });
	}
	render() {
		let headlines = "HEADLINES";

		return (
			<div>
				<Segment
					inverted
					textAlign="center"
					style={{ minHeight: "875px", padding: "1em 0em" }}
					vertical
					className="landing"
				>
					<Grid
						textAlign="center"
						style={{ height: "700px" }}
						verticalAlign="middle"
					>
						<Grid.Row>
							<Container>
								<Menu
									inverted
									pointing
									secondary
									size="large"
									style={{ borderStyle: "none" }}
								>
									<Menu.Item as="a" active>
										Home
									</Menu.Item>
									<Menu.Item as="a">About</Menu.Item>
									<Menu.Item position="right">
										<Button
											as="a"
											inverted
											onClick={() => this.props.history.push("/login")}
										>
											Log in
										</Button>
										<Button
											as="a"
											inverted
											style={{ marginLeft: "0.5em" }}
											onClick={() => this.props.history.push("/signup")}
										>
											Sign Up
										</Button>
									</Menu.Item>
								</Menu>
							</Container>
						</Grid.Row>

						<Grid.Row>
							<Container>
								<Header
									as="h1"
									style={{ color: "white", letterSpacing: "27px" }}
								>
									{headlines}
								</Header>
								<br />

								<Transition.Group animation="fade up" duration="500">
									<Form
										onSubmit={ev => {
											ev.preventDefault();
											this.props.handleSearch(this.state.searchTerm);
										}}
									>
										<Form.Group>
											<Input
												icon="search"
												value={this.state.searchTerm}
												onChange={this.handleSearchTerm.bind(this)}
												iconPosition="left"
												placeholder="Search for articles by keyword ..."
												style={{ width: "90%" }}
												size="huge"
												focus
											/>
											<Button
												type="submit"
												size="huge"
												style={{
													backgroundColor: "rgb(121, 178, 174)",
													color: "white"
												}}
											>
												Submit
											</Button>
										</Form.Group>
									</Form>
								</Transition.Group>
							</Container>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default withRouter(HomeContainer);
