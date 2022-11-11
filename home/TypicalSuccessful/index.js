import React from 'react';
import { useSelector } from 'react-redux';
import TypicalSuccessfulStories from '../../TypicalSuccessfulStories';
import { StoriesContainer, StoriesFluid, StoriesTitleH2, StoriesTitleH3, StoriesTitleWrapper } from '../../WhatWeDo/StSoftware/StoriesStSoftware/stye';

const TypicalSuccessful = ({ storiesTitle, storiesDesc }) => {
  const dataHomeSlide = useSelector(state => state.dataHomeSlide.dataHomeSlideState)
  const loading = dataHomeSlide.loading;
  return (
    <>
      {!loading && <StoriesFluid className='container-fluid'>
        <StoriesContainer className='container'>
          <StoriesTitleWrapper className='row'>
            <StoriesTitleH2 style={{ color: '#000000' }}>{storiesTitle}</StoriesTitleH2>
            <StoriesTitleH3 style={{ color: '#000000' }}>{storiesDesc}</StoriesTitleH3>
          </StoriesTitleWrapper>
          <TypicalSuccessfulStories />
        </StoriesContainer>
      </StoriesFluid>}
    </>
  )
}

export default TypicalSuccessful