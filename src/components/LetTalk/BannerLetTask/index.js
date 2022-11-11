import React from "react";
import { BackgroundColor, Banner, Container, Content, H1, H2, ImgBanner } from "./style";

const BannerLetTask = () => {
  return (
    <Container className="Container-fluid">
      <Banner className="">
        <ImgBanner className="row">
        <BackgroundColor className="bg-black w-100 h-100"></BackgroundColor>
          <Content>
            <H1>Let's talk</H1>
            <H2>Stay in touch with us</H2>
          </Content>
        </ImgBanner>
      </Banner>
    </Container>
  );
};

export default BannerLetTask;
