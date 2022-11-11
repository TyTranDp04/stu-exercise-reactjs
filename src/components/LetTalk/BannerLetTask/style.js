import styled from "styled-components";
import imgBanner from "../../../assets/images/let'stalk/contact-us.png";

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
  font-family: Roboto;
  font-size: 43px;
  font-weight: 700;
  line-height: 43px;
  margin: 0px 0px 10px;
  text-align: center;
  width: 100%;
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
  margin:0px;
`;
