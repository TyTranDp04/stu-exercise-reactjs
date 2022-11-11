import React from 'react'
import { BackgroundColor, Banner, Container, Content, H1, H2, ImgBanner } from './style'

const BannerJoinUs = () => {
  return (
    <Container className='container-fluid'>
      <Banner>
      <ImgBanner className='row'>
      <BackgroundColor className="bg-black w-100 h-100"></BackgroundColor>
          <Content>
            <H1>JOIN ST TEAM NOW</H1>
            <H2>"...to get the shit done"</H2>
          </Content>
      </ImgBanner>
      </Banner>
    </Container>
  )
}

export default BannerJoinUs