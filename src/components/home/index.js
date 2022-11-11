import React from 'react'
import ClientsPartners from './ClientsPartners'
import HomeSlide from './HomeSlide/index'
import TypicalSuccessful from './TypicalSuccessful'
import WeDevelop from './WeDevelop'

const ContentHome = () => {
  const storiesTitle = 'Typical successful stories';
  const storiesDesc = 'From ideas turned into carefully crafted pixels and problems crafted into solutions.';
  return (
    <>
      <HomeSlide />
      <TypicalSuccessful
        storiesTitle={storiesTitle}
        storiesDesc={storiesDesc}
      />
      <WeDevelop />
      <ClientsPartners />
    </>
  )
}

export default ContentHome