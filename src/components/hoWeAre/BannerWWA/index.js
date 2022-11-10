import React from "react";
import { Banner, Container, H1, H2, ImgBanner } from "./style";

const BannerWWA = () => {
  return (
    <Container className="Container-fluid">
      <Banner className="">
        <ImgBanner className="row">
          <div>
            <H1>United to grow up together</H1>
            <H2>"No one can do everything, but everyone can do something"</H2>
          </div>
        </ImgBanner>
      </Banner>
    </Container>
  );
};

export default BannerWWA;
