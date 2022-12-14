import styled from "styled-components";
export const Container = styled.div`
  padding: 0px;
  margin: 0px;
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
  font-weight: bold;
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
export const HeaderCard = styled.div``;
export const FooterCard = styled.div`
  padding: 20px 0px;
`;
export const Linka = styled.a`
  text-decoration: none;
  color: #00AEEF;
  font-weight: bold;
  &:hover{
    color: #00AEEF;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const H1 = styled.h1`
  font-size: 27px;
  font-weight: bold;
`;

export const FooterBtn = styled.div`
  padding-right: 20px;
`;
export const Btn = styled.button`
  background-color: #f5b14b;
  border-color: #f5b14b;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: #f7f7f7;
  display: inline-block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  padding: 14px 20px;
  text-align: center;
`;

export const PortLink = styled.button`
  text-decoration: none;
  color: #fff;
  border-color: #f7be68;
  background-color: #f7be68;
  font-size: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    color: #fff;
  }
  a{
    text-decoration: none;
    color: white;
  }
`;
