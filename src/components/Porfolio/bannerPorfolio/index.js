import React from 'react'
import bannerPort from '../../../assets/images/bannerPortfolifio.png' 
import { BannerCaption, BannerContainer, BannerDesc, BannerInner, BannerInnerBg, BannerTitle, BannerWrapper } from '../../whatWeDo/stSoftware/BannerStSoftware/style'
const BannerPorfolio = ({bannerTitle, bannerDesc}) => {
  return (
    <BannerContainer className='container-fluid'>
      <BannerWrapper className='row'>
        <BannerInner style={{backgroundImage: `url(${bannerPort})`}}>
          <BannerInnerBg></BannerInnerBg>
          <BannerCaption>
            <BannerTitle>{bannerTitle}</BannerTitle>
            <BannerDesc>{bannerDesc}</BannerDesc>
          </BannerCaption>
        </BannerInner>
      </BannerWrapper>
    </BannerContainer>
  )
}

export default BannerPorfolio