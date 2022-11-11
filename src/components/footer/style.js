import styled from "styled-components";
import imgFb from "../../assets/images/imgFace.png";
import StFoterImg from "../../assets/images/STFooterImg.jpg";
import StFoterLogo from "../../assets/images/STFooterLogo.jpg";

export const FooterConTainer = styled.div`
  background-color: #181818;
  color: #ffffff;
  padding: 0px;
  margin: 0px;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  font-weight: 300;
  line-height: 24px;
  margin: auto;
  padding: 100px 0px 70px;
  height: auto;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1200px) {
  }
`;
export const FooterTop = styled.div`
  width: 33%;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;
export const FooterContent = styled.div`
  padding: 0 15px;
`;
export const Menu = styled.h3`
  padding: 0px;
  font-size: 18px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500px;
  line-height: 24px;
`;
export const MenuEvent = styled.div``;
export const MenuContentTop = styled.div``;
export const MenuContentDesc = styled.div``;
export const MenuTopHome = styled.div``;
export const MenuTopWhatWeDo = styled.div``;
export const MenuTopEvent = styled.div``;
export const MenuTopContent = styled.div`
  padding: 0px 0px 0px 20px;
  font-size: 14px;
  cursor: pointer;
  margin: 0px 0px 0px 10px;
  position: relative;
  &:hover {
    color: #00aeef;
  }
  ::after {
    content: "";
    position: absolute;
    width: 0px;
    height: -5px;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    border-left: 5px solid #ffffff;
    padding-right: 15px;
    left: 8px;
    bottom: 8px;
  }
`;
export const MenuTopContentLi = styled.li``;
export const MenuDescUL = styled.ul``;
export const MenuDescContentLi = styled.li``;

export const ContactTop = styled.div``;
export const ContactDesc = styled.div``;
export const ContactContent = styled.div``;

export const FooterDesc = styled.div`
  padding: 0 15px;
  width: 33%;
  @media screen and (max-width: 990px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const Row = styled.div`
  padding-right: 40px;
  @media screen and (max-width: 990px) {
    padding: 0px;
  }
  @media screen and (max-width: 1220px) {
    padding: 0px;
  }
`;

export const ContentDesc = styled.div``;
export const AddressUS = styled.div`
  &.AddressUSTop {
    padding-left: 0px;
  }
  padding-left: 10px;
  &.about:hover {
    color: #00aeef;
    cursor: pointer;
  }
`;
export const AddressUSTop = styled.div`
  padding: 0px;
`;
export const AddressUSRow = styled.div`
  display: flex;
`;
export const RowST = styled.div`
  padding-left: 20px;
`;

export const FooterImg = styled.div`
  width: 34%;
  padding: 0 15px;
  @media screen and (max-width: 991px) {
    width: 60%;
    height: 150px;
    padding: 0 15px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 150px;
    padding: 0 15px;
  }
`;
export const ImgST = styled.div`
  width: 90%;
  height: 90%;
  background-image: url(${StFoterImg});
  background-position: 40% 75%;
  background-repeat: no-repeat;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;
export const ImgTop = styled.div`
  display: flex;
  height: 70%;
`;
export const ImgDesc = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-between;
  top: 8px;
`;
export const ImgTopLogo = styled.div`
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  border: solid white;
  margin: 5px;
  cursor: pointer;
  background-image: url(${StFoterLogo});
`;
export const ImgTopFollow = styled.div`
  font-size: 12px;
`;
export const ImgTopName = styled.a`
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.358;
  margin-bottom: -5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
}
  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }


`;
export const ImgDescFollowPage = styled.div`
  width: 100px;
  height: 22px;
  background-color: #f5f6f7;
  color: black;
  text-align: center;
  margin: 10px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 12px;
  font-weight: bold;
  padding-left: 7px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0;
    background-image: url(${imgFb});
    cursor: pointer;
  }
`;
export const ImgDescContact = styled.div``;
export const ImgTopFollower = styled.div``;
export const ContainerDesc = styled.p`
  background-color: #000000;
  border-top: 1px solid #00243f;
  width: 100%;
  height: 80px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding: 30px 0px 25px;
  margin: 0;
`;
export const ImgDescContactImg = styled.div`
  display: flex;
  width: 100px;
  height: 28px;
  background-color: #f5f6f7;
  color: black;
  margin: 5px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 7px;
  cursor: pointer;
`;
export const ContainerDescContent = styled.div`
  padding: 0 20%;
  text-align: left;
`;

export const ButtonOnToTop = styled.button`
right: 1.5%;
bottom: 37px;
position: fixed;
background-color: #00AEEF;
border-color: #00AEEF;
border-radius: 4px;
height: 40px;
font-weight: 600;
width: 42px;
color: #fff;
line-height: 45px;
transition: all 0.3s ease;
margin-left: 2px;
box-shadow: 0px 0px 1px rgb(0 0 0 / 40%);
border: 0px solid #226fb7;
z-index: 1000;
cursor:pointer;
text-align: center;
font-size: 24px!important;
display:none;
}
`;
export const MenuContent = styled.div`
  display: flex;
  color: white;
  ${Row} > ${MenuTopContent} > a {
    text-decoration: none;
    color: white;
  }
  ${Row} > ${MenuTopContent} > a:hover {
    color: #00aeef;
  }

  ${Row} > ${RowST} > ${MenuTopContent} > a {
    text-decoration: none;
    color: white;
  }
  ${Row} > ${RowST} > ${MenuTopContent} > a:hover {
    color: #00aeef;
  }
`;
