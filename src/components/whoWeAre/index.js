import React from 'react'
import BannerWWA from './BannerWWA'
import MeetOurTeam from './MeetOurTeam'
import OurMissionOurVision from './OurMissionOurVision'
import WeAreStUnited from './WeAreStUnited'

const WhoWeAre = () => {
  const titleStories = "...and many other cool stories";
  const titleWa ="WE ARE ST UNITED";
  const titleMeet = "Meet Our Team";
  const Ov = "Our vision";
  const Om = "Our mission";
  const ContentOv = "Be the premier enterprise solutions provider and software product innovator in the Asia Pacific region";
  return (
    <>
    <BannerWWA/>
    <OurMissionOurVision Ov ={Ov} Om ={Om} content ={ContentOv}/>
    <WeAreStUnited titleStories={titleStories} titleWa1={titleWa}/>
    <MeetOurTeam title={titleMeet}/>
    </>
  )
}

export default WhoWeAre