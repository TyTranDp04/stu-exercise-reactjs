import React, { useState } from 'react';
import NavBar from '../Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../assets/images/stlogo.png';
const HeaderSection =() =>{
  const [showNavBar, setShowNavBar] = useState(false)
  return (
    <Container fluid className="header__mobile">
      <Row className="w-100 m-0">
        <Col xs={3} className="nav__container">
          <div class="nav__list " onClick={()=> setShowNavBar(!showNavBar)}>
            <div class="header__menu-icon">
              <span class="header__menu-icon--dot"></span>
              <span class="header__menu-icon--dot"></span>
              <span class="header__menu-icon--dot"></span>
            </div>
          </div>
          {
          showNavBar?<NavBar/>:''
          }
        </Col>
        <Col xs={6} className="header__logo">
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderSection;