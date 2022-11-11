import React from 'react'
import BannerStIncubation from './BannerStIncubation'
import ContentStIncubation from './ContentStIncubation'
import OurProjectStIncubation from './OurProjectStIncubation'

const StIncubation = () => {
  const bannerTitle = 'ST INCUBATION';
  const bannerDesc = "We're not a mentor, expert or coach whatsoever. We are a founder and fight together";
  const stUnitedStrong = <strong>ST United</strong>;
  const iotSpaceStrong = <strong>IoT Space</strong>;
  const stIncubationTitle = 'Our incubating projects';
  const stIncubationDesc = 'We are supporting for these cool teams';

  return (
    <>
    <BannerStIncubation
    bannerTitle={bannerTitle}
    bannerDesc={bannerDesc}
    />
    <ContentStIncubation
    bannerTitle={bannerTitle}
    stUnitedStrong={stUnitedStrong}
    iotSpaceStrong={iotSpaceStrong}
    />
    <OurProjectStIncubation
    stIncubationTitle={stIncubationTitle}
    stIncubationDesc={stIncubationDesc}
    />
    </>
  )
}

export default StIncubation