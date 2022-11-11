import styled from "styled-components"

export const StDigitalMeetContainerFluid = styled.div`
*{
  color: #000000;
}
  background-color: #7a7a7a17;
  padding-bottom: 30px;

@media (max-width: 767.5px) {
  padding-top: 0;
}
`
export const StDigitalMeetContainer = styled.div`
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
export const StDigitalMeetTitle = styled.h3`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  font-weight: bold;
`
export const StDigitalMeetWrapper = styled.div`
`
export const StDigitalMeetItem = styled.div`
  margin-bottom: 25px;
`
export const StDigitalMeetImgDiv = styled.div`
  margin: 0 0 20px 0;
`
export const StDigitalMeetImg = styled.img`
  max-width: 100%;
  height: auto;
`
export const StDigitalMeetName = styled.p`
  font-weight: bold;
  margin: 0;
  @media (max-width: 767.5px) {
    font-size: 12px;
    line-height: 22px;
  }
`
export const StDigitalMeetDesc = styled.p`
@media (max-width: 767.5px) {
  font-size: 12px;
  line-height: 22px;
}
`