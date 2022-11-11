import styled from "styled-components";

export const Container = styled.div``;

export const Body = styled.div``;

export const Wrapper = styled.div``;

export const H3 = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-family: Roboto;
  font-weight: 700;
  text-transform: inherit;
  text-align: inherit;
`;

export const Content = styled.div``;

export const Card = styled.div`
  padding: 0 30px 30px;
  text-align: center;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  &:hover {
    box-shadow: 0 70px 70px rgb(0 0 0 / 20%);
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
  }
`;

export const CardHeader = styled.div`
  font-size: 60px;
  min-width: 80px;
  padding: 80px 0 70px;
@media  (max-width: 768px) {
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
