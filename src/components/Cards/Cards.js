import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({ data }) {
	let content = data.map((v, i) => {
		return (
			<div
				key={i}
				className='col-sm-6 col-md-4'
				style={{ marginTop: 30 }}
			>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={v.recipe.image} />
					<Card.Body>
						<Card.Title>{v.recipe.label}</Card.Title>
						<Card.Text></Card.Text>
						<Button variant='info'>
							<Link
								to={{
									pathname: `/details/${v.recipe.label}`,
									aboutProps: {
										value: v,
									},
								}}
								style={{ color: 'white' }}
							>
								Explore
							</Link>
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	});
	return <>{content}</>;
}

export default Cards;
