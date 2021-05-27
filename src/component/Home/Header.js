import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import getMore from '../../images/getmore.png'

const Header = () => {
    return (
        <div>
            <Navbar  expand="lg" style={{ zIndex:'3'}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ marginLeft: '200px'}}>
                            <Nav.Link href="#about" style={{ paddingLeft: '80px',color: 'white' }}>About</Nav.Link>
                            <Nav.Link href="#team" style={{ paddingLeft: '80px',color: 'white' }}>Team</Nav.Link>
                            <Nav.Link href="#pricing" style={{ paddingLeft: '80px',color: 'white' }}>Pricing</Nav.Link>
                            <Nav.Link href="#issues" style={{ paddingLeft: '80px',color: 'white' }}>Issues</Nav.Link>
                            <Nav.Link href="#signin" style={{ paddingLeft: '80px',color: 'white' }}>Sign In</Nav.Link>
                            <Nav.Link href="#more">
                                <img src={getMore} alt="" style={{ width: '200px', paddingLeft: '80px' }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar collapseOnSelect style={{ backgroundColor: ' linear-gradient(90deg, #9671FF 0%, #7A4FFF 100%)' }}  >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: '200px' }}>
                            <Nav.Link href="#about" style={{ paddingLeft: '80px' }}>About</Nav.Link>
                            <Nav.Link href="#team" style={{ paddingLeft: '80px' }}>Team</Nav.Link>
                            <Nav.Link href="#pricing" style={{ paddingLeft: '80px' }}>Pricing</Nav.Link>
                            <Nav.Link href="#issues" style={{ paddingLeft: '80px' }}>Issues</Nav.Link>
                            <Nav.Link href="#signin" style={{ paddingLeft: '80px' }}>Sign In</Nav.Link>
                            <Nav.Link href="#more">
                                <img src={getMore} alt="" style={{ width: '230px', paddingLeft: '100px' }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;