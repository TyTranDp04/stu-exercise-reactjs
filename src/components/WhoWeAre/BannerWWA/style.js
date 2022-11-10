import styled from "styled-components";
import imgBanner from "../../../assets/images/whoweare/banner.jpeg";
export const Container = styled.div`
  padding: 0px;
  background-color: #f5f5f5;
`;
export const Banner = styled.div`
  height: 400px;
  margin-bottom: 50px;
`;

export const H1 = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 43px;
  font-weight: 700;
  line-height: 43px;
  margin: 0px 0px 10px;
  text-align: center;
  width: 100%;
@media(max-width:768px){
  font-size: 24px;
  line-height: 28px;
  margin: 0 0 5px;
}
@media(max-width:482px){
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 5px;
}
}
`;
export const H2 = styled.h2`
  color: #ffffff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 0px 0px 20px;
  text-align: center;
`;
export const ImgBanner = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  font-weight: 300;
  line-height: 24px;
  background-image: url(${imgBanner});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  margin-left:0px;
`;

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
