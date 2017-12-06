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

const HomeContainer = props => {
	return (
		<div>
			<Segment
				inverted
				textAlign="center"
				style={{ minHeight: 800, padding: "1em 0em" }}
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
										onClick={() => props.history.push("/login")}
									>
										Log in
									</Button>
									<Button
										as="a"
										inverted
										style={{ marginLeft: "0.5em" }}
										onClick={() => props.history.push("/signup")}
									>
										Sign Up
									</Button>
								</Menu.Item>
							</Menu>
						</Container>
					</Grid.Row>

					<Grid.Row>
						<Container>
							<Header as="h1" style={{ color: "white" }}>
								D I S T R A C T I F Y
							</Header>
							<br />

							<Transition.Group animation="fade up" duration="500">
								<Form>
									<Form.Group>
										<Input
											icon="search"
											iconPosition="left"
											placeholder="Search for articles by keyword ..."
											style={{ width: "90%" }}
											size="huge"
											focus
										/>
										<Button type="submit" size="huge" color="blue">
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
};

export default withRouter(HomeContainer);
