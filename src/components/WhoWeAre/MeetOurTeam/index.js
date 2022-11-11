import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListDataTeam } from "../../../store/actions/WhoWeAre";
import {
  Avatar,
  Body,
  Card,
  Container,
  ContainerBody,
  ContentCard,
  FooterBtn,
  FooterCard,
  H1,
  HeaderCard,
  Linka,
  PortLink,
  Row,
  TextContent,
} from "./style";

const MeetOurTeam = ({ title }) => {
  const titleLink = "Wanna join us?";
  const dataTeam = useSelector((state) => state.dataTeam.dataTeamState);
  const dispatch = useDispatch();
  const data = dataTeam.data;
  useEffect(() => {
    dispatch(getListDataTeam());
  }, [dispatch]);
  return (
    <Container className="container-fluid">
      <Body className="container">
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
                    <Linka>
                      {item.name}
                    </Linka>
                    <TextContent>{item.position}</TextContent>
                  </FooterCard>
                </Card>
              </ContentCard>
            ))}
          </Row>
        </ContainerBody>
      </Body>
      <FooterBtn className="col-12 pt-5 text-end mb-5">
        <PortLink><Link to="/" >{titleLink}</Link></PortLink>
      </FooterBtn>
    </Container>
  );
};

export default MeetOurTeam;
