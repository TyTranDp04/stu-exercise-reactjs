import styled from "styled-components"

export const ContainerFluid = styled.div`
* {
  color: #7a7a7a;
  font-family: 'Roboto', sans-serif;
}
  padding-top: 40px;
  background-color: #7a7a7a17;

  @media (max-width: 767.5px) {
    padding-top: 0;
  }
`
export const CategoriesContainer = styled.div`
@media (min-width: 1400px) {
  max-width: 1190px;
}
@media (max-width: 991.5px) {
  padding: 0;
}

@media (max-width: 767.5px) {
  max-width: 450px;
  padding: 45px 20px;
}
`
export const CategoriesWrapper1 = styled.div`
  padding: 55px 0;

  @media (max-width: 767.5px) {
    padding: 35px 0;
  }
`
export const CategoriesWrapper2 = styled.div`
  padding: 55px 0;

  @media (max-width: 767.5px) {
    padding: 35px 0;
  }
`
export const CategoriesItemWrapper = styled.div`

`
export const CategoriesItem = styled.div`
  display: flex;
  padding: 0 20px;

  @media (max-width: 1200px) {
    padding: 0;
  }

  @media (max-width: 767.5px) {
    margin-bottom: 30px;
  }
`
export const BlockIcon = styled.div`
  font-size: 35px;
  padding: 0 32px 0 0;
  min-width: 80px;
`
export const BlockContent = styled.div`
  text-align: left;
`
export const BlockContentH3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin: 0 0 8px;
`
export const BlockContentP = styled.p`
  color: #636363;
  font-size: 16px;
  margin: 0 0 10px;
  line-height: 22px;
  font-weight: 300;

  @media (max-width: 767.5px) {
    font-size: 12px;
  }
`
export const BlockContentClick = styled.a`
  font-size: 16px;
  color: #00AEEF;
  line-height: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgba(0,174,239,0.75);
  }

  @media (max-width: 767.5px) {
    font-size: 12px;
  }
`