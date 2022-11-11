import React from "react";
import {BackgroundColor, Banner, Container, Content, H1, H2, ImgBanner } from "./style";

const BannerWWA = () => {
  return (
    <Container className="Container-fluid">
      <Banner className="">
        <ImgBanner className="row">
          <BackgroundColor className="bg-black w-100 h-100"></BackgroundColor>
          <Content>
            <H1>United to grow up together</H1>
            <H2>"No one can do everything, but everyone can do something"</H2>
          </Content>
        </ImgBanner>
      </Banner>
    </Container>
  );
};

export default BannerWWA;
