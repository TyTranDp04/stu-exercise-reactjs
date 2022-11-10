import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import logo from '../../assets/images/stlogo.png'
import Header from '../../../src/components/header/index'
import Footer from '../../../src/components/footer/index'

const LayoutFull = ({ children }) => {

  return (<>
    <HelmetProvider>
      <Helmet>
        <title>WHO WE ARE – ST United</title>
        <link rel="icon" href={logo} />
      </Helmet>
    </HelmetProvider>

    <Header/>
    <Container fluid className='content' style={{'padding':'0px'}}>
      {children}
    </Container>
    <Footer/>
  </>)
}

export default LayoutFull;