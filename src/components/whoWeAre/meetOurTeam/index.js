import React from 'react'
import { dataTeam } from '../../../constants/ourteam'
import { Avatar, Body, Card, Container, ContainerBody, ContentCard, FooterCard, Link } from './style'

const MeetOurTeam = () => {
  return (
    <Container className='container-fluid'>
      <Body className='container'>
      <ContainerBody className="container">
          <h1 className="mb-5">Meet Our Team</h1>
          <div className="row">
            {dataTeam.map((item) => (
              <ContentCard className="col-md-3 col-sm-12 p-0" key={item.id}>
                <Card className="bg-white">
                  <div>
                    <Avatar src={item.avatar}></Avatar>
                  </div>
                  <FooterCard>
                    <Link href={item.Link} target="_blank">
                      {item.name}
                    </Link>
                    <p>{item.position}</p>
                  </FooterCard>
                </Card>
              </ContentCard>
            ))}
          </div>
        </ContainerBody>
      </Body>
    </Container>
  )
}

export default MeetOurTeam