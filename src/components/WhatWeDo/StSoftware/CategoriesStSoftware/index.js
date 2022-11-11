import { faFlag, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListDataStSoftware } from "../../../../store/actions/WhatWeDo"
import { BlockContent, BlockContentClick, BlockContentH3, BlockContentP, BlockIcon, CategoriesContainer, CategoriesItem, CategoriesItemWrapper, CategoriesWrapper1, CategoriesWrapper2, ContainerFluid } from "./style"

const CategoriesStSoftWare = () => {
  const dataStSoftware = useSelector(state => state.stSoftware.stSoftwareState)
  const dispatch = useDispatch();
  const data1 = dataStSoftware.data.slice(0, 3);
  const data2 = dataStSoftware.data.slice(3, 4);
  const data3 = dataStSoftware.data.slice(4, 6);

  useEffect(() => {
    dispatch(getListDataStSoftware());
  }, [dispatch]);

  return (
    <ContainerFluid className='container-fluid'>
      <CategoriesContainer className='container'>
        <CategoriesWrapper1 className='row'>
          {data1?.map(item => <CategoriesItemWrapper key={item.id} className='col-sm-12 col-md-4'>
            <CategoriesItem>
              <BlockIcon><FontAwesomeIcon icon={faFlag} /></BlockIcon>
              <BlockContent>
                <BlockContentH3>{item.title}</BlockContentH3>
                <BlockContentP>{item.desc}</BlockContentP>
                <BlockContentClick href='#'>{item.button}</BlockContentClick>
              </BlockContent>
            </CategoriesItem>
          </CategoriesItemWrapper>)}
        </CategoriesWrapper1>
        <CategoriesWrapper2 className='row'>
          {data2?.map(item => <CategoriesItemWrapper key={item.id} className='col-sm-12 col-md-4'>
            <CategoriesItem>
              <BlockIcon><FontAwesomeIcon icon={faUsers} /></BlockIcon>
              <BlockContent>
                <BlockContentH3>{item.title}</BlockContentH3>
                <BlockContentP>{item.desc}</BlockContentP>
                <BlockContentClick href='#'>{item.button}</BlockContentClick>
              </BlockContent>
            </CategoriesItem>
          </CategoriesItemWrapper>)}
          {data3?.map(item => <CategoriesItemWrapper key={item.id} className='col-sm-12 col-md-4'>
            <CategoriesItem>
              <BlockIcon><FontAwesomeIcon icon={faFlag} /></BlockIcon>
              <BlockContent>
                <BlockContentH3>{item.title}</BlockContentH3>
                <BlockContentP>{item.desc}</BlockContentP>
                <BlockContentClick href='#'>{item.button}</BlockContentClick>
              </BlockContent>
            </CategoriesItem>
          </CategoriesItemWrapper>)}
        </CategoriesWrapper2>
      </CategoriesContainer>
    </ContainerFluid >
  )
}

export default CategoriesStSoftWare