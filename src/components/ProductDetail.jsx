import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Loading } from './Loading';

export const ProductDetail = () => {
	const [carsPorId, setCarPorId] = useState();
	const id = useParams().id;

	useEffect(() => {
		const db = getFirestore();

		const auto = doc(db, 'items', id);

		getDoc(auto).then((response) => {
			response.exists() && setCarPorId({ id: id, ...response.data() });
		});
	}, [carsPorId]);

	return <>{!carsPorId ? <Loading /> : <ItemDetail item={carsPorId} />}</>;
};
