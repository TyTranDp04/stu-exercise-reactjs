import React from 'react'
import BannerWWA from './bannerWWA'
import MeetOurTeam from './meetOurTeam'
import OurMissionOurVision from './ourMissionOurVision'
import WeAreStUnited from './weAreStUnited'

const WhoWeAre = () => {
  const titleWa = "WE ARE ST UNITED";
  return (
    <>
    <BannerWWA titleWa={titleWa} />
    <OurMissionOurVision/>
    <WeAreStUnited/>
    <MeetOurTeam/>
    </>
  )
}

export default WhoWeAre