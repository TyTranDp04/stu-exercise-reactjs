import React from 'react';
import { useSelector } from 'react-redux';
import HeaderMobile from './HeaderMobile';
import HeaderSection from './HeaderSection';
import HeaderContainer from './style';

const Header = () => {
  const dataHomeSlide = useSelector(state => state.dataHomeSlide.dataHomeSlideState);
  const loading = dataHomeSlide.loading;
  return (
    <>
    {!loading && <HeaderContainer>
      <HeaderSection />
      <HeaderMobile />
    </HeaderContainer>}
    </>
  );
}

export default Header;