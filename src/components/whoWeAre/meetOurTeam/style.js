import styled from "styled-components";
import imgBanner from "../../../assets/images/whoweare/banner.jpeg";
export const Container = styled.div`
  padding: 0px;
  margin:0px;
`;
export const Banner = styled.div``;
export const Body = styled.div``;
export const HeaderContent = styled.div``;
export const Title = styled.h2``;
export const MainWrapper = styled.div`
  font-weight: 300;
  line-height: 24px;
  margin: 0px -15px;
`;
export const TextContent = styled.p`
  font-weight: 300;
  line-height: 24px;
  margin: 0px 0px 20px;
`;
export const Strong = styled.strong`
  font-weight: 700;
`;
export const BodyWA = styled.div`
  @media (max-width: 897px) {
    padding: 0px;
    margin-left: 50px;
  }
`;
export const ColumnInner = styled.div`
  padding: 0px 40px;
  @media (max-width: 897px) {
    padding: 20px;
  }
`;
export const Wrapper = styled.div`
  font-weight: 300;
  line-height: 24px;
  margin-bottom: 50px;
  position: relative;
`;
export const Hr = styled.hr`
  margin-bottom: 50px;
  margin-top: 50px;
  width: 50%;
  margin-left: 250px;
  color: #cfc5c5;
`;
export const ContainerBody = styled.div``;
export const Row = styled.div``;
export const ContentCard = styled.div``;
export const Card = styled.div`
  background-color: #ffffff;
  font-weight: 300;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  line-height: 24px;
  padding: 35px 15px;
  text-align: center;
  max-height: 300px;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
    box-shadow: 0 70px 70px rgb(0 0 0 / 20%);
  }
`;
export const HeaderCard = styled.div``
export const FooterCard = styled.div`
  padding: 20px 0px;
`;
export const Link = styled.a`
  text-decoration: none;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const H1 = styled.h1`
font-size:27px;
`