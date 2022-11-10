import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderSection from './HeaderSection';
import HeaderContainer from './style';

function Header(props) {
    return (
        <HeaderContainer>
            <HeaderSection/>
            <HeaderMobile/>
        </HeaderContainer>
    );
}

export default Header;