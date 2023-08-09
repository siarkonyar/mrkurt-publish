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

				<div className='d-flex flex-column justify-content-end px-3 pb-3'>
					<div className='product-card-cart'>
						<button>
							<i class="bi bi-cart3"></i>
							<span>Buy Now</span>
						</button>
					</div>
					<div className='product-card-shop'>
						<button>
							<i class="bi bi-bag"></i>
							<span>Add to Cart</span>
						</button>
					</div>
				</div>
			</Card>
		</div>
	)
}
