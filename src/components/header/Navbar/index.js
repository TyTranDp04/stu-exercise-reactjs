import React, {useState} from 'react';
import Navigation from '../Navigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  const [showSubmenu, setShowSubmenu] = useState(false) 
     
    return (
            <Row className='d-flex align-items-center nav__bar w-100' >
                <Col className="nav__content p-0 m-0">
                    <ul className='nav__content-list'>
                        <Navigation value="HOME" handle = {{showSubmenu, setShowSubmenu}}/>
                        <Navigation value="WHAT WE DO" 
                        listoption = {[
                            {title:"ST SOFTWARE", link:""},
                            {title:"ST DIGITAL", link:""},
                            {title:"ST INCUBATION", link:""}
                        ]} handle = {{showSubmenu, setShowSubmenu}}/>
                        <Navigation value="WHO WE ARE" handle = {{showSubmenu, setShowSubmenu}}/>
                        <Navigation value="PORTFOLIO" handle = {{showSubmenu, setShowSubmenu}}/>
                        <Navigation value="JOIN US" handle = {{showSubmenu, setShowSubmenu}}/>
                        <Navigation value="LET'S TALK" handle = {{showSubmenu, setShowSubmenu}}/>
                    </ul>
                </Col>
            </Row>
   
    )
}
export default NavBar;