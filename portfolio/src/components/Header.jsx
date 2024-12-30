import Container from 'react-bootstrap/Container';
import DropdownDivider from 'react-bootstrap/esm/DropdownDivider';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#link">Link</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <DropdownItem href="#action/3.1">Action</DropdownItem>
                            <DropdownItem href="#action/3.2">
                                Another action
                            </DropdownItem>
                            <DropdownItem href="#action/3.3">Something</DropdownItem>
                            <DropdownDivider/>
                            <DropdownItem href="#action/3.4">
                                Separated link
                            </DropdownItem>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}