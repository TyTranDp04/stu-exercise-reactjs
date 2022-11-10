import React from 'react'
import BannerWWA from './BannerWWA'
import MeetOurTeam from './MeetOurTeam'
import OurMissionOurVision from './OurMissionOurVision'
import WeAreStUnited from './WeAreStUnited'

const WhoWeAre = () => {
  const titleWa = "WE ARE ST UNITED";
  return (
    <>
    <BannerWWA/>
    <OurMissionOurVision/>
    <WeAreStUnited titleWa={titleWa} />
    <MeetOurTeam/>
    </>
  )
}

export default WhoWeAre