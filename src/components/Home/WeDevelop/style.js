import styled from "styled-components";
import banner from '../../../assets/images/wedevelop.jpg'

export const Container = styled.div`
  background-image: url(${banner});
  background-size: cover;
  z-index: 0;
`;

export const Body = styled.div`
  padding-top: 35px;
  @media (min-width: 1400px) {
    max-width: 1180px;
  }
  @media (max-width: 767.5px) {
    max-width: 450px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 55px;
`;

export const H3 = styled.h3`
  z-index: 1000;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 10px 0;
  font-weight: 500;
`;
export const H3Title = styled.h3`
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  font-weight: bold;
`
export const H4 = styled.h4`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 20px;
`
export const Content = styled.div`
  padding: 40px 0 55px;
`;

export const Card = styled.div`
  padding: 0 30px 30px;
  text-align: center;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 70px 70px rgb(0 0 0 / 20%);
    transform: scale(1.01);
    transform: translate(0, -10px);
  }
`;
export const CardInner = styled.div`
  @media (min-width: 768px) {
    padding: 0;
  }
`
export const CardHeader = styled.div`
  font-size: 60px;
  min-width: 80px;
  padding: 80px 0 70px;
  @media (max-width: 768px) {
    padding: 40px 0 50px;
  }
`;

export const CardFooter = styled.div``;
export const Image = styled.img`
  width: 150px;
`;

export const Text = styled.p`
  color: #636363;
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  margin: 0 0 10px 0;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
