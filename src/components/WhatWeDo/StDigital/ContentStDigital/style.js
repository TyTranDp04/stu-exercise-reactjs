import styled from "styled-components"

export const StDigitalContainerFluid = styled.div`
  background-color: #7a7a7a17;

@media (max-width: 767.5px) {
  padding-top: 0;
}
`
export const StDigitalContainer = styled.div`
@media (min-width: 1400px) {
  max-width: 1190px;
}
@media (max-width: 991.5px) {
  padding: 0;
}

@media (max-width: 767.5px) {
  max-width: 450px;
}
`
export const StDigitalWrapper = styled.div`
`
export const StDigitalIntro = styled.div`
  color: #000000;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`
export const StDigitalIntroTitle = styled.h1`
  padding: 30px 0;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 767.5px) {
    font-size: 20px;
    padding: 15px 0;
  }
`
export const StDigitalIntroDesc = styled.p`
@media (max-width: 767.5px) {
  font-size: 12px;
}
`
export const StDigitalItemImg = styled.img`
  max-width: 100%;
  height: auto;
`