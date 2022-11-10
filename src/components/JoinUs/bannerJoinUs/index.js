import React from 'react'
import { Banner, Container, H1, H2, ImgBanner } from './style'

const BannerJoinUs = () => {
  return (
    <Container className='container-fluid'>
      <Banner>
      <ImgBanner>
          <div>
            <H1>JOIN ST TEAM NOW</H1>
            <H2>"...to get the shit done"</H2>
          </div>
      </ImgBanner>
      </Banner>
    </Container>
  )
}

export default BannerJoinUs