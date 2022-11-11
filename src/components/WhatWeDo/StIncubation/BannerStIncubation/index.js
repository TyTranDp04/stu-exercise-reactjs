import React from 'react'
import banner from '../../../../assets/images/st-incubation.jpg'
import { BannerCaption, BannerContainer, BannerDesc, BannerInner, BannerInnerBg, BannerTitle, BannerWrapper } from '../../StSoftware/BannerStSoftware/style'

const BannerStIncubation = ({bannerTitle,bannerDesc}) => {
  return (
    <BannerContainer className='container-fluid'>
      <BannerWrapper className='row'>
        <BannerInner style={{ backgroundImage: `url(${banner})` }}>
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

export default BannerStIncubation