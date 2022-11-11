import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListDataStDigitalMeet } from "../../../../store/actions/WhatWeDo";
import { StDigitalMeetContainer, StDigitalMeetContainerFluid, StDigitalMeetDesc, StDigitalMeetImg, StDigitalMeetImgDiv, StDigitalMeetItem, StDigitalMeetName, StDigitalMeetTitle, StDigitalMeetWrapper } from "./style";

const MeetStDigital = ({stDigitalMeetTitle}) => {
  const dataStDigitalMeet = useSelector(state => state.stDigitalMeet.stDigitalMeetState);
  const dispatch = useDispatch();

  const data = dataStDigitalMeet.data;

  useEffect(() => {
    dispatch(getListDataStDigitalMeet());
  }, [dispatch]);

  return (
    <StDigitalMeetContainerFluid className='container-fluid'>
      <StDigitalMeetContainer className='container'>
        <StDigitalMeetTitle>{stDigitalMeetTitle}</StDigitalMeetTitle>

        <StDigitalMeetWrapper className='row'>
          {data?.map(item => <StDigitalMeetItem key={item.id} className='col-sm-12 col-md-3'>
            <StDigitalMeetImgDiv><StDigitalMeetImg src={item.image}/></StDigitalMeetImgDiv>
            <StDigitalMeetName>{item.name}</StDigitalMeetName>
            <StDigitalMeetDesc>{item.desc}</StDigitalMeetDesc>
          </StDigitalMeetItem>)}
        </StDigitalMeetWrapper>

      </StDigitalMeetContainer>
    </StDigitalMeetContainerFluid>
  )
}

export default MeetStDigital