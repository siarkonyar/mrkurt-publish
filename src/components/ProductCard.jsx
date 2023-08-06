import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, img }) {


	return (
		<div className='w-100 my-3'>
			<Card className='w-100 product-card'>
				<Card.Img className='img-fluid' variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						<Link to={`/product/${product.id}`}>
							{product.productName}
						</Link>
					</Card.Title>
					<Card.Text>
						{product.quantityPerUnit}
					</Card.Text>
					<Card.Text className='fw-bold'>
						With Tax <br />
						{product.unitPrice} £
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}
