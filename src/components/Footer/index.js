import { faAngleUp, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FooterConTainer,
  FooterTop,
  FooterContent,
  MenuContent,
  MenuTopContent,
  FooterDesc,
  Container,
  Row,
  RowST,
  AddressUS,
  AddressUSTop,
  FooterImg,
  ImgTop,
  ImgDesc,
  ImgTopLogo,
  ImgTopName,
  ImgTopFollow,
  ImgDescFollowPage,
  ImgDescContact,
  ImgTopFollower,
  ContainerDesc,
  ContainerDescContent,
  ImgST,
  AddressUSRow,
  ButtonOnToTop,
  ImgDescContactImg,
  MenuFooter,
} from "./style";

window.onscroll = () => scrollFunction();

function scrollFunction() {
  const mybutton = document.getElementById("myBtn");
  if (window.pageYOffset > 20 || window.pageYOffset > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const openInNewTab = (url) => {
  window.open(url, "_blank");
};

const Footer = () => {
  // const Menu = "MENU";
  const Home = "HOME";
  const WhatWeDo = "WHAT WE DO";
  const SoftWare = "ST SOFTWARE";
  const Digital = "ST DIGITAL";
  const Incubation = "ST INCUBATION";
  const WhoWeAre = "WHO WE ARE";
  const Portfolio = "PORTFOLIO";
  const Join = "JOIN US";
  const Let = "LET’S TALK";
  const Address = "Nomad Space";
  const AddressDesc = "14 An Thuong 18 , Da Nang";
  const Call = "Call us +84 905 610 229";
  const Mail = "info@stsoftware.com";
  // const Follow = "Followed";
  const FollowPage = "Follow page";
  const Contact = "CONTACT US";
  const Contactus = "Contact us";
  const Content = "ST United";
  const Follower = "1,694 followers";
  const ContainerLast = "Copyright © 2019 by ST United.";

  const [followPageContent, setFollowPageContent] = useState(FollowPage);
  // const [isShow, setIsshow] = useState(true)
  const updateFollowPageContent = () => {
    setFollowPageContent(
      FollowPage === followPageContent ? "Followed" : FollowPage
    );
  };
  return (
    <>
      <FooterConTainer className="container-fluid">
        <Container className="container">
          <FooterTop>
            <FooterContent>
              <MenuFooter style={{ padding: "0px" }}>MENU</MenuFooter>
              <MenuContent>
                <Row>
                  <MenuTopContent className="about">
                    <Link to="/">{Home}</Link>
                  </MenuTopContent>
                  <MenuTopContent className="about">
                    <Link to="/st-software/">{WhatWeDo}</Link>
                  </MenuTopContent>
                  <RowST>
                    <MenuTopContent className="about">
                      <Link to="/st-software/">{SoftWare}</Link>
                    </MenuTopContent>
                    <MenuTopContent className="about">
                      <Link to="/st-digital/">{Digital}</Link>
                    </MenuTopContent>
                    <MenuTopContent className="about">
                      <Link to="/st-incubation/">{Incubation}</Link>
                    </MenuTopContent>
                  </RowST>
                </Row>
                <Row>
                  <MenuTopContent className="about">
                    <Link to="/who-we-are/">{WhoWeAre}</Link>
                  </MenuTopContent>
                  <MenuTopContent className="about">
                    <Link to="/portfolio/">{Portfolio}</Link>
                  </MenuTopContent>
                  <MenuTopContent className="about">
                    <Link to="/join-us/">{Join}</Link>
                  </MenuTopContent>
                  <MenuTopContent className="about">
                    <Link to="/lets-talk/">{Let}</Link>
                  </MenuTopContent>
                </Row>
              </MenuContent>
            </FooterContent>
          </FooterTop>
          <FooterDesc>
            <MenuFooter style={{ padding: "0px" }}>{Contact}</MenuFooter>
            <Row>
              <AddressUSTop>{Address}</AddressUSTop>
              <AddressUSRow>
                <FontAwesomeIcon icon={faLocationArrow} />
                <AddressUS>{AddressDesc}</AddressUS>
              </AddressUSRow>
              <AddressUSRow>
                <FontAwesomeIcon icon={faPhone} />
                <AddressUS>{Call}</AddressUS>
              </AddressUSRow>
              <AddressUSRow>
                <FontAwesomeIcon icon={faEnvelope} />
                <AddressUS
                  className="about"
                  onClick={() => openInNewTab("mailto:hello@stunited.vn")}
                >
                  {Mail}
                </AddressUS>
              </AddressUSRow>
            </Row>
          </FooterDesc>
          <FooterImg>
            <ImgST>
              <ImgTop>
                <ImgTopLogo
                  onClick={() =>
                    openInNewTab("https://www.facebook.com/stunited.vn/")
                  }
                ></ImgTopLogo>
                <ImgTopFollower>
                  <ImgTopName
                    onClick={() =>
                      openInNewTab("https://www.facebook.com/stunited.vn/")
                    }
                  >
                    {Content}
                  </ImgTopName>
                  <ImgTopFollow>{Follower}</ImgTopFollow>
                </ImgTopFollower>
              </ImgTop>
              <ImgDesc>
                <ImgDescFollowPage onClick={updateFollowPageContent}>
                  {followPageContent}
                </ImgDescFollowPage>
                <ImgDescContactImg>
                  <FontAwesomeIcon
                    style={{
                      paddingTop: "6px",
                      paddingRight: "3px",
                    }}
                    icon={faEnvelope}
                  />
                  <ImgDescContact>
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {Contactus}
                    </Link>
                  </ImgDescContact>
                </ImgDescContactImg>
              </ImgDesc>
            </ImgST>
          </FooterImg>
        </Container>
        <ContainerDesc>
          <ContainerDescContent>{ContainerLast}</ContainerDescContent>
        </ContainerDesc>
      </FooterConTainer>
      <ButtonOnToTop
        className="BtnTop"
        id="myBtn"
        onClick={() => topFunction()}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </ButtonOnToTop>
    </>
  );
};
export default Footer;
