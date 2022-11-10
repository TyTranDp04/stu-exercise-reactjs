import React from "react";
import { Banner, Container, H1, H2, ImgBanner } from "./style";

const BannerLetTask = () => {
  return (
    <Container className="Container-fluid">
      <Banner className="">
        <ImgBanner className="row">
          <div>
            <H1>Let's talk</H1>
            <H2>Stay in touch with us</H2>
          </div>
        </ImgBanner>
      </Banner>
    </Container>
  );
};

export default BannerLetTask;
