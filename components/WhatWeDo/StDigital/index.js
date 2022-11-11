import BannerStDigital from './BannerStDigital';
import ContentStDigital from './ContentStDigital';
import MeetStDigital from './MeetStDigital';


const StDigital = () => {
  const stDigitalTitle = 'ST DIGITAL';
  const bannerDigitalDesc = 'Offshore Digital Marketing Services';
  const stDigitalDesc = 'offers professional offshore digital marketing services that can make your business stand out from the digital crowd. Our digital marketing services range from search engine optimisation (SEO), social media services, email marketing services, content outsourcing, and graphic design services, which aids in creating organic engagement and direct traffic towards your website and its content. Through partnering with ST, we can help you create a good lasting impression online and give you an edge over your top competitors!';
  const stDigitalMeetTitle = 'Meet our team';
  return (
    <>
      <BannerStDigital
        stDigitalTitle={stDigitalTitle}
        bannerDigitalDesc={bannerDigitalDesc}
      />
      <ContentStDigital
        stDigitalTitle={stDigitalTitle}
        stDigitalDesc={stDigitalDesc}
      />
      <MeetStDigital 
      stDigitalMeetTitle={stDigitalMeetTitle}
      />
    </>
  )
}

export default StDigital