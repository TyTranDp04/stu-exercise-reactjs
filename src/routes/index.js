import {
  BrowserRouter, Route, Routes, useLocation
} from "react-router-dom";
import HomePage from '../views/home';
import JoinUsPage from '../views/JoinUs';
import LetTalkPage from '../views/LetTalk';
import PorfolioPage from '../views/Porfolio';
import StIncubationPage from "../views/WhatWeDoPage/StIncubationPage";
import StDigitalPage from "../views/WhatWeDoPage/StDigitalPage";
import StSoftWarePage from '../views/WhatWeDoPage/StSoftwarePage';
import WhoWeArePage from '../views/WhoWeAre';
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/portfolio" element={<PorfolioPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/st-software" element={<StSoftWarePage />} />
          <Route path="/lets-talk" element={<LetTalkPage />} />
          <Route path="/st-incubation" element={<StIncubationPage />} />
          <Route path="/st-digital" element={<StDigitalPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default RouterApp