import { Item } from '../Item/Item';

export const ItemList = ({ cars }) => {
	return cars.map((car) => <Item key={car.id} props={car} />);
};
