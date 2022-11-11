import React, { useState } from 'react';
import NavBar from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../assets/images/stlogo.png';
import { Link } from 'react-router-dom';

const HeaderSection =() =>{
  const [showNavBar, setShowNavBar] = useState(false)
  return (
    <Container fluid className="header__mobile">
      <Row className="w-100 m-0">
        <Col xs={3} className="nav__container">
          <div className="nav__list " onClick={()=> setShowNavBar(!showNavBar)}>
            <div className="header__menu-icon">
              <span className="header__menu-icon--dot"></span>
              <span className="header__menu-icon--dot"></span>
              <span className="header__menu-icon--dot"></span>
            </div>
          </div>
          {
          showNavBar?<NavBar/>:''
          }
        </Col>
        <Col xs={6} className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderSection;