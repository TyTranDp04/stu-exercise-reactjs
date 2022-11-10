import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dataTeam } from '../../../constants/ourteam';
import { getListDataTeam } from '../../../store/actions/WhoWeAre';
import { Avatar, Body, Card, Container, ContainerBody, ContentCard, FooterCard, H1, HeaderCard, Link, Row, TextContent } from './style'

const MeetOurTeam = ({title}) => {
    const dataTeam = useSelector((state) => state.dataTeam.dataTeamState);
    const dispatch = useDispatch();
    const data = dataTeam.data;
    useEffect(() => {
      dispatch(getListDataTeam());
    }, [dispatch]);
  console.log(data);
  return (
    <Container className='container-fluid'>
      <Body className='container'>
      <ContainerBody className="container">
          <H1 className="mb-5">{title}</H1>
          <Row className="row">
            {data?.map((item) => (
              <ContentCard className="col-md-3 col-sm-12 p-0" key={item.id}>
                <Card className="bg-white">
                  <HeaderCard>
                    <Avatar src={item.avatar}></Avatar>
                  </HeaderCard>
                  <FooterCard>
                    <Link href={item.Link} target="_blank">
                      {item.name}
                    </Link>
                    <TextContent>{item.position}</TextContent>
                  </FooterCard>
                </Card>
              </ContentCard>
            ))}
          </Row>
        </ContainerBody>
      </Body>
    </Container>
  )
}

export default MeetOurTeam