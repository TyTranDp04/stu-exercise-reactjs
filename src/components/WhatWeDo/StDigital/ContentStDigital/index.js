import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getListDataStDigital } from "../../../../store/actions/WhatWeDo";
import { BlockContent, BlockContentH3, BlockContentP, BlockIcon, CategoriesItem, CategoriesItemWrapper, CategoriesWrapper2 } from "../../StSoftware/CategoriesStSoftware/style";
import { StDigitalContainer, StDigitalContainerFluid, StDigitalIntro, StDigitalIntroDesc, StDigitalIntroTitle, StDigitalItemImg, StDigitalWrapper } from "./style";

const ContentStDigital = ({ stDigitalTitle, stDigitalDesc }) => {
  const stDigitalData = useSelector(state => state.stDigital.stDigitalState);
  const dispatch = useDispatch();

  const data = stDigitalData.data;

  useEffect(() => {
    dispatch(getListDataStDigital())
  }, [dispatch]);

  return (
    <StDigitalContainerFluid className='container-fluid'>
      <StDigitalContainer className='container'>
        <StDigitalWrapper className='row'>
          <StDigitalIntro className='col-lg-12'>
            <StDigitalIntroTitle>{stDigitalTitle}</StDigitalIntroTitle>
            <StDigitalIntroDesc><strong>ST Digital </strong>{stDigitalDesc}</StDigitalIntroDesc>
          </StDigitalIntro>
        </StDigitalWrapper>
        <CategoriesWrapper2 className='row'>
          {data?.map(item => <CategoriesItemWrapper key={item.id} className='col-sm-12 col-md-4'>
            <CategoriesItem style={{padding: '0'}}>
              <BlockIcon style={{minWidth: '92px'}}><StDigitalItemImg src={item.image} alt={item.title} /></BlockIcon>
              <BlockContent>
                <BlockContentH3>{item.title}</BlockContentH3>
                <BlockContentP>{item.desc}</BlockContentP>
              </BlockContent>
            </CategoriesItem>
          </CategoriesItemWrapper>)}
        </CategoriesWrapper2>
      </StDigitalContainer>
    </StDigitalContainerFluid>
  )
}

export default ContentStDigital