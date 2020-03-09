import React, { Component } from 'react';
import { Card, CardColumns, Button, Row, Col } from 'react-bootstrap';


class Content extends Component {
	state = {
		articles: []
	}

	componentDidMount() {
		fetch('https://newsapi.org/v2/top-headlines?language=en&apiKey=ee3998a05fc34b3e9f25cce1509dbfd2')
			.then(res => res.json())
			.then((data) => {
				this.setState({ articles: data.articles })
				console.log(this.state.articles)
			})
			.catch(console.log)
	}

	render() {

		return (
			<div>
				<div className="container">
					<h1>Headlines</h1>
					<CardColumns>
						{this.state.articles.map((articles) => (
							<Row>
								<Col xs={12}>
									<Card keys={Object.keys(articles)} xs={3}>
										<Card.Img variant="top" src={articles.urlToImage} />
										<Card.Body>
											<Card.Title>{articles.title}</Card.Title>
											&nbsp;
									
											<Button variant="primary" href={articles.url} target="_blank">Read more</Button>
										</Card.Body>
										<Card.Footer className="text-muted">Author: {articles.author}<br />Source: {articles.source.name}</Card.Footer>
									</Card>
								</Col>
							</Row>
						))}
					</CardColumns>
					<br />
				</div>
			</div>
		);
	}
}
export default Content;
