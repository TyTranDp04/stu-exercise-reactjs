import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListJoinUs } from "../../../store/actions/joinus";
<<<<<<< HEAD
import Loading from "../../Loading";
=======
>>>>>>> develop
import {
  Body,
  Card,
  CardFooter,
  CardHeader,
  CardWrapper,
  Container,
  Content,
  H3,
  H3Title,
  Image,
  Link,
  Text,
  Wrapper,
} from "./style";

const ContentJoinUs = () => {
  const dataJoinUs = useSelector((state) => state.dataTeam.dataTeamState);
  const dispatch = useDispatch();
  const data = dataJoinUs.data;
  const loading = dataJoinUs.loading;
  useEffect(() => {
    dispatch(getListJoinUs());
  }, [dispatch]);
  return (
    <Container className="Container-fluid">
      <Body className="container">
        <Wrapper>
          <H3Title>
            Building a startup is hard, so we build a family to make it more
            enjoyable.
          </H3Title>
        </Wrapper>
        {loading ? <Loading/> : <Content className="row mt-5 mb-5">
          {data?.map((text) => (
            <CardWrapper className="col-sm-12 col-md-6 col-lg-3" key={text.id}>
              <Card>
                <CardHeader key={text.id}>
                  <Image src={text.image}></Image>
                </CardHeader>
                <CardFooter>
                  <H3>{text.title}</H3>
                  <Text>{text.text}</Text>
                  <Link href={text.link}>Interesting?</Link>
                </CardFooter>
              </Card>
            </CardWrapper>
          ))}
        </Content>}
      </Body>
    </Container>
  );
};

export default ContentJoinUs;
