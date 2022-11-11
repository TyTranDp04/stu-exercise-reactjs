import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from '../views/Home';
import JoinUsPage from '../views/JoinUs';
import LetTalkPage from '../views/LetTalk';
import PorfolioPage from '../views/Porfolio';
import StDigitalPage from "../views/WhatWeDoPage/StDigitalPage";
import StSoftWarePage from '../views/WhatWeDoPage/StSoftwarePage';
import WhoWeArePage from '../views/WhoWeAre';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/portfolio" element={<PorfolioPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/st-software" element={<StSoftWarePage />} />
        <Route path="/lets-talk" element={<LetTalkPage />} />
        <Route path="/st-digital" element={<StDigitalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp