import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getListDataStSoftwareStories } from "../../store/actions/WhatWeDo"
import { faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StoriesDesciption, StoriesDesignation, StoriesItem, StoriesItemAfter, StoriesItemBefore, StoriesItemContainer, StoriesItemImg, StoriesItemInner, StoriesItemName, StoriesItemWrapper, StoriesSocial, StoriesSocialFb, StoriesSocialFbA, StoriesSocialLinked, StoriesSocialLinkedA } from "./style"

const TypicalSuccessfulStories = () => {
  const stSoftwareStoriesData = useSelector(state => state.stSoftwareStories.stSoftwareStoriesState);
  const dispatch = useDispatch();

  const data = stSoftwareStoriesData.data;

  useEffect(() => {
    dispatch(getListDataStSoftwareStories());
  }, [dispatch]);
  return (
    <StoriesItemContainer className='row'>
      {data?.map(item => <StoriesItemWrapper key={item.id} className='col-md-3'>
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
  )
}

export default TypicalSuccessfulStories