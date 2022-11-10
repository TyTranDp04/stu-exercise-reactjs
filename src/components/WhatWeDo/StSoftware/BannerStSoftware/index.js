import { BannerCaption, BannerContainer, BannerDesc, BannerInner, BannerInnerBg, BannerTitle, BannerWrapper } from "./style"
import banner from '../../../../assets/images/bannerstsoftware.jpg'
const BannerStSoftware = ({ bannerTitle, bannerDesc }) => {
  return (
    <BannerContainer className='container-fluid'>
      <BannerWrapper className='row'>
        <BannerInner style={{backgroundImage: `url(${banner})`}}>
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

export default BannerStSoftware