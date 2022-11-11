import React, {useState} from 'react';
import Navigation from '../Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = (props) =>{
    const link = props.link
  const [showSubmenu, setShowSubmenu] = useState(false) 
     
    return (
            <Row className='d-flex align-items-center nav__bar w-100' >
                <Col className="nav__content p-0 m-0">
                    <ul className='nav__content-list'>
                        <Navigation value="HOME" handle = {{showSubmenu, setShowSubmenu}} link="/"/>
                        <Navigation value="WHAT WE DO" 
                        listoption = {[
                            {title:"ST SOFTWARE", link:"/st-software/"},
                            {title:"ST DIGITAL", link:"/st-digital/"},
                            {title:"ST INCUBATION", link:"/st-incubation/"}
                        ]} handle = {{showSubmenu, setShowSubmenu}} link="/st-software/"/>
                        <Navigation value="WHO WE ARE" handle = {{showSubmenu, setShowSubmenu}} link="/who-we-are/"/>
                        <Navigation value="PORTFOLIO" handle = {{showSubmenu, setShowSubmenu}} link="/portfolio/"/>
                        <Navigation value="JOIN US" handle = {{showSubmenu, setShowSubmenu}} link="/join-us/"/>
                        <Navigation value="LET'S TALK" handle = {{showSubmenu, setShowSubmenu}} link="/lets-talk/"/>
                    </ul>
                </Col>
            </Row>
   
    )
}
export default NavBar;