import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from '../views/home';
import OnePlusCampus from '../views/one-plus-campus';
import TwoPlusCampus from '../views/two-plus-campus';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="one-plus-campus" element={<OnePlusCampus />} />
        <Route path="two-plus-campus" element={<TwoPlusCampus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp