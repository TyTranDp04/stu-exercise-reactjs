import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListDataStIncubation } from '../../../../store/actions/WhatWeDo';
import Loading from '../../../Loading';
import { StDigitalContainer, StDigitalContainerFluid, StDigitalIntro, StDigitalIntroDesc, StDigitalIntroTitle, StDigitalItemImg, StDigitalWrapper } from '../../stDigital/ContentStDigital/style';
import { BlockContent, BlockContentH3, BlockContentP, BlockIcon, CategoriesItem, CategoriesItemWrapper, CategoriesWrapper2 } from '../../stSoftware/CategoriesStSoftware/style';

const ContentStIncubation = ({bannerTitle, stUnitedStrong, iotSpaceStrong}) => {
  const dataStIncubation = useSelector(state => state.stIncubation.stIncubationState);
  const dispatch = useDispatch();
  
  const data = dataStIncubation.data;
  const loading = dataStIncubation.loading;
  useEffect(() => {
    dispatch(getListDataStIncubation());
  }, [dispatch]);

  return (
    <StDigitalContainerFluid className='container-fluid'>
      <StDigitalContainer className='container'>
        <StDigitalWrapper className='row'>
          <StDigitalIntro className='col-lg-12'>
            <StDigitalIntroTitle>{bannerTitle}</StDigitalIntroTitle>
            <StDigitalIntroDesc>After long time working  in software development outsourcing industry, founders of {stUnitedStrong} still keep intense aspiration how to apply the high technologies to solve the society problem in Vietnam.</StDigitalIntroDesc>
            <StDigitalIntroDesc>Beginning as a provider of co-working spaces with {iotSpaceStrong} and Nomad Space in Danang, {stUnitedStrong} would like to support the startup and ICT community.   Moreover, {stUnitedStrong}  provides incubator programs for budding entrepreneurs. The program focuses on providing resources and support for startups in terms of business modeling, market penetration and even product development. </StDigitalIntroDesc>
          </StDigitalIntro>
        </StDigitalWrapper>
        {loading ? <Loading/> : <CategoriesWrapper2 className='row'>
          {data?.map(item => <CategoriesItemWrapper key={item.id} className='col-sm-12 col-md-4'>
            <CategoriesItem style={{padding: '0'}}>
              <BlockIcon style={{minWidth: '92px'}}><StDigitalItemImg src={item.image} alt={item.title} /></BlockIcon>
              <BlockContent>
                <BlockContentH3>{item.title}</BlockContentH3>
                <BlockContentP>{item.desc}</BlockContentP>
              </BlockContent>
            </CategoriesItem>
          </CategoriesItemWrapper>)}
        </CategoriesWrapper2>}
      </StDigitalContainer>
    </StDigitalContainerFluid>
  )
}

export default ContentStIncubation
