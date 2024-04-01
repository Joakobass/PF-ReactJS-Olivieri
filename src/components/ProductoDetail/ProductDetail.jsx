import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import data from '../../data/dataCars.json';
import '../ProductoDetail/details.css';
import Button from 'react-bootstrap/Button';

export const ProductDetail = () => {
	const [carsPorId, setCarPorId] = useState();
	const id = useParams().id;

	useEffect(() => {
		setCarPorId(data.find((car) => car.id === Number(id)));
	}, [carsPorId]);
	if (!carsPorId) return <div>Loading...</div>;

	return (
		<div className="container-product-detail">
			<h1>Detalle del producto</h1>
			<h2>
				Marca y Modelo: {carsPorId.brand} {carsPorId.model}
			</h2>
			<h3>Precio: {carsPorId.price}</h3>
			<img width={400} src={carsPorId.img} />
			<p>{carsPorId.desc}</p>
			<Button variant="dark" to="/products" as={NavLink}>
				Volver
			</Button>
		</div>
	);
};
