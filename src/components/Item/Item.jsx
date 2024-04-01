import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

export const Item = ({ props }) => {
	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Img
						variant="top"
						src={props.img}
						className="card-img"
					/>
					<Card.Title>
						{props.brand} {props.model}
					</Card.Title>
					<Card.Subtitle>Precio: {props.price}</Card.Subtitle>
					<Card.Text>Categoria: {props.category}</Card.Text>
					<Button
						variant="secondary"
						to={`/item/${props.id}`}
						as={NavLink}
					>
						Ver más
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};
