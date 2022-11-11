import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const LoadingBoder = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 100px;
  width: 100px;
  border: 5px solid #ebebec;
  border-radius: 50%;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LoadingAnimation = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 5px solid #226FB7;
  animation: ${rotate} 1s linear infinite;
`
const loadingpulse = keyframes`
  from {
    width: 100px;
  }

  to {
    width: 80px;
  }`

export const LoadingIcon = styled.div`
  // top: 50%;
  // left: 50.5%;
  // transform: translate(-50%, -50%);
  position: absolute;
  width: 100px;
  text-align: center;
  padding: 5px;
  animation: ${loadingpulse} 1s alternate infinite;
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`