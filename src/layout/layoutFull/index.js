import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import logo from '../../assets/images/stlogo.png'
import Header from '../../../src/components/header/index'
import Footer from '../../../src/components/footer/index'

const LayoutFull = ({ children, title = "" }) => {

  return (<>
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href={logo} />
      </Helmet>
    </HelmetProvider>

    <Header/>
    <Container fluid className='content'>
      {children}
    </Container>
    <Footer/>
  </>)
}

export default LayoutFull;