import React from 'react';
import NavBar from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../assets/images/stlogo.png';
import { Link } from 'react-router-dom';

const HeaderSection =() =>{
  return (
    <Container fluid className={"header__section"}>
      <Row className="container m-auto">
        <Col lg = {2} className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
        <Col lg = {10} className="nav__container m-0">
           <NavBar link="/st-software"/>
        </Col>
    </Row>
    </Container>  
  );
}

export default HeaderSection;