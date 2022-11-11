import { faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListDataStIncubationProject } from '../../../../store/actions/WhatWeDo';
import { StoriesDesciption, StoriesDesignation, StoriesItem, StoriesItemAfter, StoriesItemBefore, StoriesItemContainer, StoriesItemImg, StoriesItemInner, StoriesItemName, StoriesItemWrapper, StoriesSocial, StoriesSocialFb, StoriesSocialFbA, StoriesSocialLinked, StoriesSocialLinkedA } from '../../../TypicalSuccessfulStories/style';
import { StoriesContainer, StoriesFluid, StoriesTitleH2, StoriesTitleH3, StoriesTitleWrapper } from '../../stSoftware/StoriesStSoftware/stye';

const OurProjectStIncubation = ({ stIncubationTitle, stIncubationDesc }) => {
  const dataStIncubationProject = useSelector(state => state.stIncubationProject.stIncubationProjectState);
  const dispatch = useDispatch();
  const data = dataStIncubationProject.data;
  useEffect(() => {
    dispatch(getListDataStIncubationProject());
  }, [dispatch]);

  return (
    <StoriesFluid className='container-fluid' style={{backgroundColor: '#fff', paddingTop: '50px'}}>
      <StoriesContainer className='container'>
        <StoriesTitleWrapper className='row'>
          <StoriesTitleH2 style={{ color: '#000000' }}>{stIncubationTitle}</StoriesTitleH2>
          <StoriesTitleH3 style={{ color: '#000000' }}>{stIncubationDesc}</StoriesTitleH3>
        </StoriesTitleWrapper>
        <StoriesItemContainer className='row'>
          {data?.map(item => <StoriesItemWrapper key={item.id} className='col-sm-12 col-md-3'>
            <StoriesItem>
              <StoriesItemImg src={item.image} alt={item.title} />
              <StoriesItemBefore>
                <StoriesItemInner>
                  <StoriesItemName href='#'>{item.title}</StoriesItemName>
                  <StoriesDesignation>{item.designation}</StoriesDesignation>
                  <StoriesSocial>
                    <StoriesSocialFb><StoriesSocialFbA target="true" href='https://www.facebook.com/stunited.vn'><FontAwesomeIcon icon={faSquareFacebook} /></StoriesSocialFbA></StoriesSocialFb>
                    <StoriesSocialLinked><StoriesSocialLinkedA href='#'><FontAwesomeIcon icon={faLinkedin} /></StoriesSocialLinkedA></StoriesSocialLinked>
                  </StoriesSocial>
                </StoriesItemInner>
              </StoriesItemBefore>

              <StoriesItemAfter>
                <StoriesItemInner>
                  <StoriesItemName href='#'>{item.title}</StoriesItemName>
                  <StoriesDesignation>{item.designation}</StoriesDesignation>
                  <StoriesDesciption>{item.description}</StoriesDesciption>
                  <StoriesSocial>
                    <StoriesSocialFb><StoriesSocialFbA target="true" href='https://www.facebook.com/stunited.vn'><FontAwesomeIcon icon={faSquareFacebook} /></StoriesSocialFbA></StoriesSocialFb>
                    <StoriesSocialLinked><StoriesSocialLinkedA href='#'><FontAwesomeIcon icon={faLinkedin} /></StoriesSocialLinkedA></StoriesSocialLinked>
                  </StoriesSocial>
                </StoriesItemInner>
              </StoriesItemAfter>

            </StoriesItem>
          </StoriesItemWrapper>)}
        </StoriesItemContainer>
      </StoriesContainer>
    </StoriesFluid >
  )
}

export default OurProjectStIncubation