import styled from "styled-components";
import imgBanner from "../../../assets/images/whoweare/join.jpg";

export const Container = styled.div`
padding:0px;
`

export const Banner = styled.div`
  height: 400px;
  margin-bottom: 50px;
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

export const H1 = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 43px;
  font-weight: 500;
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
  font-weight: 500;
  line-height: 24px;
  margin: 0px 0px 20px;
  text-align: center;
`;