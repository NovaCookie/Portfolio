import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top" data-bs-theme="dark">
            <Container>
                <NavbarBrand href="#home">Portfolio de Carteau Nathan</NavbarBrand>
                {/* <NavLink href="#bonus">Bonus</NavLink> */}
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' href="#skills">Compétence</Link>
                        <Link className='nav-link' href="#projects">Projet</Link>
                        <Link className='nav-link' href="#about">A propos</Link>
                        <Link className='nav-link' href="#contact">Contactez moi</Link>
                        {/* <Link className='nav-link' href="/login">Connexion</Link>  */}
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}