import React from 'react'
import { dataText, dataText2 } from '../../../constants/ourteam'
import { Body, BodyWA, ColumnInner, Container, ContentCard, H4, HeaderContent, Row, TextContent, Title } from './style'

const WeAreStUnited = ({titleStories,titleWa1}) => {
  return (
    <Container className='container-fluid'>
      <Body className='container'>
      <Row>
          <Title>{titleWa1}</Title>
          <BodyWA className="row text-start mt-5">
            {dataText.map((text) => (
              <ColumnInner
                className="col-lg-6 col-md-6 col-sm-12"
                key={text.id}
              >
                <HeaderContent className="col-12 mb-3">
                  <b>{text.title}</b>
                </HeaderContent>
                <ContentCard className="col-12">
                  <TextContent>{text.text}</TextContent>
                </ContentCard>
              </ColumnInner>
            ))}
            {dataText2.map((text) => (
              <ColumnInner
                className="col-lg-6 col-md-6 col-sm-12"
                key={text.id}
              >
                <HeaderContent className="col-12 mb-3">
                  <b>{text.title} </b>
                </HeaderContent>
                <ContentCard className="col-12">
                  <TextContent>{text.text}</TextContent>
                </ContentCard>
              </ColumnInner>
            ))}
          </BodyWA>
          <HeaderContent className="col-12">
            <H4>{titleStories}</H4>
          </HeaderContent>
        </Row>
      </Body>
    </Container>
  )
}

export default WeAreStUnited