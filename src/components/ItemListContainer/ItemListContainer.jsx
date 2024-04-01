import { ItemList } from '../ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import './cardsMod.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
	const [cars, setCars] = useState([]);
	const category = useParams().categoria;

	useEffect(() => {
		pedirDatos().then((result) => {
			if (category) {
				setCars(
					result.filter(
						(car) =>
							car.category.trim().toLowerCase() ===
							category.trim().toLowerCase()
					)
				);
			} else {
				setCars(result);
			}
		});
	}, [category]);

	if (!cars.length) {
		return <div>Cargando...</div>;
	}
	return (
		<div className="container-cards">
			<ItemList cars={cars} />
		</div>
	);
};
