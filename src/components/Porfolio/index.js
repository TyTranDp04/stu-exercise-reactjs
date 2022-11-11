import React from 'react'
import BannerPorfolio from './bannerPorfolio'
import StoriesPorfolio from './storiesPorfolio'

const Porfolio = () => {
  const bannerTitle = 'PORTFOLIO';
  const bannerDesc = 'From ideas turned into carefully crafted pixels and problems crafted into solutions.';
  const storiesTitle = 'Typical successful stories';
  const storiesDesc = 'Meeting deadlines and ensuring high standards are our style of life. 82% of our customers have chosen our team for their 2nd project.';
  return (
    <>
      <BannerPorfolio
      bannerTitle={bannerTitle}
      bannerDesc={bannerDesc}
      />
      <StoriesPorfolio
      storiesTitle={storiesTitle}
      storiesDesc={storiesDesc}
      />
      
    </>
  )
}

export default Porfolio