import styled, { keyframes } from "styled-components"

export const StoriesItemContainer = styled.div`
  * {
    color: #fff;
  }
`
export const StoriesItemWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`
export const StoriesItem = styled.div`
  position: relative;
  overflow: hidden;
`
export const StoriesItemInner = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 0 30px;
`
export const StoriesItemImg = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`
export const StoriesDesignation = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 767.5px) {
    font-size: 12px;
    line-height: 16px;
  }
`
export const StoriesDesciption = styled.a`
  font-size: 14px;
  line-height: 23px;
  margin: 0 0 20px;
  color: rgba(0,0,0,.7);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #7a7a7a;
  }
  @media (max-width: 767.5px) {
    font-size: 12px;
    line-height: 20px;
  }
`
export const StoriesItemName = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin: 0 0 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 767.5px) {
    font-size: 14px;
    line-height: 18px;
  }
`
export const StoriesSocialLinked = styled.li`
`
export const StoriesSocialFb = styled.li`
  margin-right: 6px;
`
export const StoriesSocialFbA = styled.a`
  text-decoration: none;
`
export const StoriesSocialLinkedA = styled.a`
  text-decoration: none;
`
export const StoriesSocial = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-left: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  ${StoriesSocialFb} > ${StoriesSocialFbA} > svg > path:hover,
  ${StoriesSocialLinked} > ${StoriesSocialLinkedA} > svg > path:hover{
    color: #506dab;
  }
`
export const StoriesItemBefore = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,.2) 55%,rgba(0,0,0,.8) 100%);
  animation: 500ms ${keyframes({ from: { left: '-100%' }, to: { left: '0' } })} forwards;
  ${StoriesItem}:hover & {
    animation: 500ms ${keyframes({ from: { left: '0' }, to: { left: '-100%' } })} forwards;
  }
`
export const StoriesItemAfter = styled.div`
  *{
    color: #7a7a7a;
  }

  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,.9);
  transform: translate3d(100%,0,0);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  z-index: 1000;
  animation: 500ms ${keyframes({ from: { left: '-100%' }, to: { left: '0' } })} forwards;
  ${StoriesItem}:hover & {
    animation: 500ms ${keyframes({ from: { left: '0' }, to: { left: '-100%' } })} forwards;
  }
  & ${StoriesItemInner} > ${StoriesItemName},
  & ${StoriesItemInner} > ${StoriesDesignation}{
    color: #000;
	}

  & ${StoriesItemInner} > ${StoriesItemName}:hover,
  & ${StoriesItemInner} > ${StoriesDesignation}:hover{
    color: #4cc6f4;
	}
`