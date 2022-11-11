import banner from '../../../../assets/images/bannerstdigital.jpg'
import { BannerCaption, BannerContainer, BannerDesc, BannerInner, BannerInnerBg, BannerTitle, BannerWrapper } from '../../StSoftware/BannerStSoftware/style'

const BannerStDigital = ({ bannerDigitalDesc, stDigitalTitle }) => {
  return (
    <BannerContainer className='container-fluid'>
      <BannerWrapper className='row'>
        <BannerInner style={{ backgroundImage: `url(${banner})` }}>
          <BannerInnerBg></BannerInnerBg>
          <BannerCaption>
            <BannerTitle>{stDigitalTitle}</BannerTitle>
            <BannerDesc>{bannerDigitalDesc}</BannerDesc>
          </BannerCaption>
        </BannerInner>
      </BannerWrapper>
    </BannerContainer>
  )
}

export default BannerStDigital