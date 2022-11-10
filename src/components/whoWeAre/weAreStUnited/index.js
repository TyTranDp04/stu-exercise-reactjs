import React from 'react'
import { dataText, dataText2 } from '../../../constants/ourteam'
import { Body, BodyWA, ColumnInner, Container, TextContent, Title } from './style'

const WeAreStUnited = ({titleWa}) => {
  return (
    <Container className='container-fluid'>
      <Body className='container'>
      <div>
          <Title>{titleWa}</Title>
          <BodyWA className="row text-start mt-5">
            {dataText.map((text) => (
              <ColumnInner
                className="col-lg-6 col-md-6 col-sm-12"
                key={text.id}
              >
                <div className="col-12 mb-3">
                  <b>{text.title}</b>
                </div>
                <div className="col-12">
                  <TextContent>{text.text}</TextContent>
                </div>
              </ColumnInner>
            ))}
            {dataText2.map((text) => (
              <ColumnInner
                className="col-lg-6 col-md-6 col-sm-12"
                key={text.id}
              >
                <div className="col-12 mb-3">
                  <b>{text.title} </b>
                </div>
                <div className="col-12">
                  <TextContent>{text.text}</TextContent>
                </div>
              </ColumnInner>
            ))}
          </BodyWA>
          <div className="col-12">
            <h4>...and many other cool stories</h4>
          </div>
        </div>
      </Body>
    </Container>
  )
}

export default WeAreStUnited