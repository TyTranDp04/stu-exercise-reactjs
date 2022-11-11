import React from 'react'
import icon from '../../../assets/images/stlogo.png'
import { Image, LoadingAnimation, LoadingBoder, LoadingContainer, LoadingIcon } from './style'

const LoadingHome = () => {
  return (
    <LoadingContainer>
      <LoadingBoder>
        <LoadingAnimation></LoadingAnimation>
      </LoadingBoder>
      <LoadingIcon><Image src={icon} /></LoadingIcon>
    </LoadingContainer>
  )
}

export default LoadingHome