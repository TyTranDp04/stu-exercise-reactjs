import React from 'react'
import BannerJoinUs from './BannerJoinUs'
import ContentJoinUs from './ContentJoinUs'
import { Container } from './ContentJoinUs/style'

const JoinUs = () => {
  return (
    <Container style={{backgroundColor: '#7a7a7a17', padding: '0'}}>
      <BannerJoinUs />
      <ContentJoinUs />
    </Container>
  )
}

export default JoinUs