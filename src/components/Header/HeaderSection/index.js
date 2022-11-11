import React from 'react';
import NavBar from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../assets/images/stlogo.png';
const HeaderSection =() =>{
  return (
    <Container fluid className={"header__section"}>
      <Row className="container m-auto">
        <Col lg = {2} className="header__logo">
            <a href="index.html">
                <img src={logo} alt="logo" />
            </a>
        </Col>
        <Col lg = {10} className="nav__container m-0">
           <NavBar/>
        </Col>
    </Row>
    </Container>  
  );
}

export default HeaderSection;