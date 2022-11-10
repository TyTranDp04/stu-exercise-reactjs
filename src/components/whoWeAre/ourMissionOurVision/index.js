import React from 'react'
import { Body, Container, HeaderContent, Hr, MainWrapper, Strong, TextContent, Wrapper } from './style'

const OurMissionOurVision = () => {
  return (
    <Container className='container-fluid'>
    <Body className='container'>
    <HeaderContent className="text-start">
          <TextContent>
            Established on the early of 2016 and known as STD Software serves
            diverse global clients (Japanese, Australian, US) by offering
            mainstream services: IT outsourcing, software & website development,
            mobile applications.
          </TextContent>
          <TextContent>
            In 2019, STD Software was acquired to become ST Software division in
            ST United beside other divisions: ST Digital and ST Incubator.
          </TextContent>
          <TextContent>
            <Strong>Our vision</Strong>: Be the premier enterprise solutions
            provider and software product innovator in the Asia Pacific region
          </TextContent>
          <TextContent>
            <Strong>Our mission</Strong>:
          </TextContent>
          <ul>
            <li>
              To empower our business partners to gain competitive advantage by
              providing innovative solutions.
            </li>
            <li>
              To continuously enhance our expertise in cutting-edge technologies
              and processes.
            </li>
          </ul>
        </HeaderContent>
        <MainWrapper>
          <Wrapper>
            {" "}
            <Hr></Hr>
          </Wrapper>
        </MainWrapper>
    </Body>
  </Container>
  )
}

export default OurMissionOurVision