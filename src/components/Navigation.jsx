import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Navigation = (props) => {
    const tabs =['About', 'Projects', 'Contact', 'Resume'];
return (
<div>
    <Navbar collapseOnSelect className="navigation" expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="#home">LC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            {tabs.map((tab) => (
                <Nav.Link
                href=
                {"#" + tab}
                onClick={() => props.setCurrentPage(tab)}>
                {tab}</Nav.Link>
            ))}
                <NavDropdown title="Social Media" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://github.com/lexcraw4d">Github</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.linkedin.com/in/alexiacrawford/"> LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item href="https://twitter.com/LexCraw4d">Twitter</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        
    </Navbar>
 </div>
    )
}

export default Navigation
