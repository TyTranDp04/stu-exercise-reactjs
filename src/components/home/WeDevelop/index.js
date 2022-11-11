import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListDataWeDevelop } from '../../../store/actions/home';
import { Body, Card, CardFooter, CardHeader, CardInner, Container, Content, H3, H3Title, H4, Image, Link, Text, Wrapper } from './style';

const WeDevelop = () => {
  const dataWeDevelop = useSelector(state => state.weDevelop.weDevelopState);
  const dispatch = useDispatch();
  const data = dataWeDevelop.data;
  useEffect(() => {
    dispatch(getListDataWeDevelop())
  }, [dispatch]);

  return (
    <Container className="Container-fluid">
      <Body className="container">
        <Wrapper className='row'>
          <H3> WE DEVELOP | WE SUPPORT | WE IMPROVE</H3>
          <H4>Launch your ideas. Execute your plans. Maximize project success.</H4>
        </Wrapper>
        <Content className="row">
          {data?.map((text) => (
            <CardInner className="col-sm-12 col-md-4"  key={text.id}>
              <Card>
                <CardHeader>
                  <Image src={text.image}></Image>
                </CardHeader>
                <CardFooter>
                  <H3Title>{text.title}</H3Title>
                  <Text>{text.text}</Text>
                  <Link href={text.link}>See More</Link>
                </CardFooter>
              </Card>
            </CardInner>
          ))}
        </Content>
      </Body>
    </Container>
  )
}

export default WeDevelop;