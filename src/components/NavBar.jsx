import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
	const { cart } = useContext(CartContext);
	const cantidadProd = cart.length;

	return (
		<Navbar className="fondoNav sticky-top">
			<Navbar.Brand to="/" as={Link} className="text-links">
				Automotores Bianca
			</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link to="/products" as={Link} className="text-links">
					Productos
				</Nav.Link>

				<NavDropdown title="Categorias" id="basic-nav-dropdown">
					<NavDropdown.Item to="/products/sedan" as={Link}>
						Sedan
					</NavDropdown.Item>
					<NavDropdown.Item to="/products/suv" as={Link}>
						SUV
					</NavDropdown.Item>
					<NavDropdown.Item to="/products/truck" as={Link}>
						Truck
					</NavDropdown.Item>
					<NavDropdown.Item to="/products/convertible" as={Link}>
						Convertible
					</NavDropdown.Item>
					<NavDropdown.Item to="/products/hatchback" as={Link}>
						Hatchback
					</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Link to="/cart">
				<CartWidget cant={cantidadProd} />
			</Link>
		</Navbar>
	);
};
