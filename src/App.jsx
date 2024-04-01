import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Home } from './components/Home/Home';

import './App.css';
import { ProductDetail } from './components/ProductoDetail/ProductDetail';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ItemListContainer />} />
				<Route
					path="/products/:categoria"
					element={<ItemListContainer />}
				/>
				<Route path="/item/:id" element={<ProductDetail />} />
				<Route path="*" element="ERROR 404" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
