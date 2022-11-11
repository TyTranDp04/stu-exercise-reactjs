import {
  faLinkedin, faSquareFacebook
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListDataPortfolio } from "../../../store/actions/Portfolio";
import {
  StoriesDesciption,
  StoriesDesignation,
  StoriesItem,
  StoriesItemAfter,
  StoriesItemBefore,
  StoriesItemContainer,
  StoriesItemImg,
  StoriesItemInner,
  StoriesItemName,
  StoriesItemWrapper,
  StoriesSocial,
  StoriesSocialFb,
  StoriesSocialFbA,
  StoriesSocialLinked,
  StoriesSocialLinkedA
} from "../../TypicalSuccessfulStories/style";
import {
  StoriesContainer,
  StoriesFluid,
  StoriesTitleH2,
  StoriesTitleH3,
  StoriesTitleWrapper
} from "../../WhatWeDo/StSoftware/StoriesStSoftware/stye";
import { PortfolioBtn, PortLink } from "./style";
import {Link} from 'react-router-dom'

const PortfolioStories = ({ storiesTitle, storiesDesc }) => {
  const PortDow = "Download full stories";
  const stSoftwareStoriesData = useSelector(
    (state) => state.DataPortfolio.PortfolioState
  );
  const dispatch = useDispatch();

  const data = stSoftwareStoriesData.data;

  useEffect(() => {
    dispatch(getListDataPortfolio());
  }, [dispatch]);
  return (
    <>
      <StoriesFluid className="container-fluid" style={{paddingBottom: '0'}}>
        <StoriesContainer className="container">
          <StoriesTitleWrapper className="row">
            <StoriesTitleH2 style={{fontWeight :"bold", color:"black"}}>{storiesTitle}</StoriesTitleH2>
            <StoriesTitleH3 style={{ color:"black"}}>{storiesDesc}</StoriesTitleH3>
          </StoriesTitleWrapper>
          <StoriesItemContainer className="row">
            {data?.map((item) => (
              <StoriesItemWrapper key={item.id} className="col-sm-12 col-md-3">
                <StoriesItem>
                  <StoriesItemImg src={item.image} alt={item.title} />
                  <StoriesItemBefore>
                    <StoriesItemInner>
                      <StoriesItemName href="#">{item.title}</StoriesItemName>
                      <StoriesDesignation>
                        {item.designation}
                      </StoriesDesignation>
                      <StoriesSocial>
                        <StoriesSocialFb>
                          <StoriesSocialFbA
                            target="true"
                            href="https://www.facebook.com/stunited.vn"
                          >
                            <FontAwesomeIcon icon={faSquareFacebook} />
                          </StoriesSocialFbA>
                        </StoriesSocialFb>
                        <StoriesSocialLinked>
                          <StoriesSocialLinkedA href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </StoriesSocialLinkedA>
                        </StoriesSocialLinked>
                      </StoriesSocial>
                    </StoriesItemInner>
                  </StoriesItemBefore>

                  <StoriesItemAfter>
                    <StoriesItemInner>
                      <StoriesItemName href="#">{item.title}</StoriesItemName>
                      <StoriesDesignation>
                        {item.designation}
                      </StoriesDesignation>
                      <StoriesDesciption>{item.description}</StoriesDesciption>
                      <StoriesSocial>
                        <StoriesSocialFb>
                          <StoriesSocialFbA
                            target="true"
                            href="https://www.facebook.com/stunited.vn"
                          >
                            <FontAwesomeIcon icon={faSquareFacebook} />
                          </StoriesSocialFbA>
                        </StoriesSocialFb>
                        <StoriesSocialLinked>
                          <StoriesSocialLinkedA href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                          </StoriesSocialLinkedA>
                        </StoriesSocialLinked>
                      </StoriesSocial>
                    </StoriesItemInner>
                  </StoriesItemAfter>
                </StoriesItem>
              </StoriesItemWrapper>
            ))}
          </StoriesItemContainer>
          <PortfolioBtn>
            <PortLink><Link to="/" >{PortDow}</Link></PortLink>
          </PortfolioBtn>
        </StoriesContainer>
      </StoriesFluid>
    </>
  );
};

export default PortfolioStories;
