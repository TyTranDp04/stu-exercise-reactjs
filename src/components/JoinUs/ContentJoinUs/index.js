import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJoinUs } from "../../../store/actions/Joinus";
import {
  Body,
  Card,
  CardFooter,
  CardHeader,
  Container,
  Content,
  H3,
  Image,
  Link,
  Text,
  Wrapper,
} from "./style";

const ContentJoinUs = () => {
  const dataJoinUs = useSelector((state) => state.dataTeam.dataTeamState);
  const dispatch = useDispatch();
  const data = dataJoinUs.data;
  useEffect(() => {
    dispatch(getListJoinUs());
  }, [dispatch]);
  return (
    <Container className="Container-fluid">
      <Body className="container">
        <Wrapper>
          <H3>
            Building a startup is hard, so we build a family to make it more
            enjoyable.
          </H3>
        </Wrapper>
        <Content className="row mt-5 mb-5">
          {data?.map((text) => (
            <Card className="col-lg-3 col-md-6 col-sm-12 bg-white">
              <CardHeader key={text.id}>
                <Image src={text.image}></Image>
              </CardHeader>
              <CardFooter>
                <H3>{text.title}</H3>
                <Text>{text.text}</Text>
                <Link href={text.link}>Interesting?</Link>
              </CardFooter>
            </Card>
          ))}
        </Content>
      </Body>
    </Container>
  );
};

export default ContentJoinUs;
