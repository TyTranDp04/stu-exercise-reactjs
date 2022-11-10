import React from "react";
import { dataTeam, dataText, dataText2 } from "../../../constants/ourteam";
import {
  Avatar,
  Banner,
  Body,
  BodyWA,
  Card,
  ColumnInner,
  Container,
  ContainerBody,
  ContentCard,
  FooterCard,
  HeaderContent,
  Hr,
  Link,
  MainWrapper,
  Strong,
  TextContent,
  Title,
  Wrapper,
} from "./style";

const BannerWWA = ({titleWa}) => {
  return (
    <Container className="Container-fluid">
      <Banner>
        {/* <img src='https://stunited.vn/wp-content/uploads/2019/08/1566375726229.jpeg' alt=''></img> */}
      </Banner>
      <Body className="container">
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
  );
};

export default BannerWWA;
