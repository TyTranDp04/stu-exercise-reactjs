import styled from "styled-components"

export const BannerContainer = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  * {
    margin: 0;
  }
`
export const BannerWrapper = styled.div`
  width: 100%;
  height: 400px;
  z-index: 0;
  visibility: inherit;
  opacity: 1;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
`
export const BannerInner = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 0;
  opacity: 1;
`
export const BannerInnerBg = styled.div`
  opacity: 0.4;
  background-color: black;
  height: 100%;
`
export const BannerCaption = styled.div`
  width: 100%;
  color: #fff;
  z-index: 10;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%,-50%);
`
export const BannerTitle = styled.h1`
  font-size: 43px;
  line-height: 43px;
  font-weight: 700;
  margin: 0 0 10px;
  color: #fff;
  @media (max-width: 991.5px) {
    font-size: 30px;
  }
  @media (max-width: 767.5px) {
    font-size: 24px;
  }
`
export const BannerDesc = styled.h2`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  color: #fff;
  @media (max-width: 767.5px) {
    font-size: 16px;
  }
`