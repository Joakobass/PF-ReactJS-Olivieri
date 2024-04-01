import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from '../../assets/carrito.svg';
import contadorCart from '../../assets/contCart.svg';
import './navbarmod.css';
import { NavLink } from 'react-router-dom';
import '../../data/dataCars.json';

export const NavBar = () => {
	return (
		<Navbar className="fondoNav">
			<Container>
				<Navbar.Brand to="/" as={NavLink} className="text-links">
					Automotores Bianca
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link
						to="/products"
						as={NavLink}
						className="text-links"
					>
						Productos
					</Nav.Link>
					<Nav.Link to="*" as={NavLink} className="text-links">
						Contacto
					</Nav.Link>
					<NavDropdown title="Categorias" id="basic-nav-dropdown">
						<NavDropdown.Item to="/products/sedan" as={NavLink}>
							Sedan
						</NavDropdown.Item>
						<NavDropdown.Item to="/products/suv" as={NavLink}>
							SUV
						</NavDropdown.Item>
						<NavDropdown.Item to="/products/truck" as={NavLink}>
							Truck
						</NavDropdown.Item>
						<NavDropdown.Item
							to="/products/convertible"
							as={NavLink}
						>
							Convertible
						</NavDropdown.Item>
						<NavDropdown.Item to="/products/hatchback" as={NavLink}>
							Hatchback
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>

				<img src={cart} title="Carrito" className="cart" />
				<img
					src={contadorCart}
					title="Carrito"
					className="contador-cart"
				/>
			</Container>
		</Navbar>
	);
};
