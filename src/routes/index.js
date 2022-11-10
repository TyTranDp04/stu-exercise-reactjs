import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from '../views/home';
import JoinUsPage from '../views/JoinUs';
import LetTalkPage from '../views/LetTalk';
import PorfolioPage from '../views/Porfolio';
import WhoWeArePage from '../views/WhoWeAre';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/portfolio" element={<PorfolioPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/lets-talk" element={<LetTalkPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp