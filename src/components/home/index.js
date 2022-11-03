import React from 'react'
import DpAboutRoad from './dp-about-road'
import DpAdmission from './dp-admission'
import DpAlumniSaying from './dp-alumni-saying'
import DpBackground from './dp-background'
import DpCampus from './dp-campus'
import DpConcerns from './dp-concerns'
import DpMustHave from './dp-must-have'

const Content = () => {
  return (
    <>
    <DpBackground/>
    <DpAboutRoad/>
    <DpMustHave/>
    <DpCampus/>
    <DpAdmission/>
    <DpConcerns/>
    <DpAlumniSaying/>
    </>
  )
}

export default Content