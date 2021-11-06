import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import links from "../utils/links";
import headerImage from '../assets/header-assets/logo.png'
import facebookImage from '../assets/header-assets/facebook.png'
import twitterImage from '../assets/header-assets/twitter.png'
import youtubeImage from '../assets/header-assets/youtube.png'
import instagramImage from '../assets/header-assets/instagram.png'
import {ReactComponent as Hamburger} from '../assets/header-assets/hamburger.svg';
import * as constants from "./constants";

const Header = constants.Header
const HeaderLeftAlignedWrapper = constants.HeaderLeftAlignedWrapper
const HeaderImage = constants.HeaderImage
const HeaderText = constants.HeaderText
const HeaderRightAlignedWrapper = constants.HeaderRightAlignedWrapper
const HeaderTitle = constants.HeaderTitle
const HeaderSubTitle = constants.HeaderSubTitle
const SocialLogo = constants.SocialLogo
const SocialLogoWrapper = constants.SocialLogoWrapper
const MainSlogan = constants.MainSlogan
const TopHeaderWrapper = constants.TopHeaderWrapper

const TopHeader = () => (
    <TopHeaderWrapper>
        <HeaderLeftAlignedWrapper>
            <a href={links.home}>
                <HeaderImage src={headerImage}/>
            </a>
            <HeaderText>
                <HeaderTitle>Ortiz Martial Arts Academy</HeaderTitle>
                <HeaderSubTitle>MONA VALE • NSW • AUSTRALIA</HeaderSubTitle>
            </HeaderText>
        </HeaderLeftAlignedWrapper>
        <HeaderRightAlignedWrapper>
            <SocialLogoWrapper>
                <a href="https://www.facebook.com/ortizmartialarts/" rel="noreferrer" target="_blank">
                    <SocialLogo src={facebookImage}/>
                </a>
                <a href="https://www.instagram.com/ortiz_academy/" rel="noreferrer" target="_blank">
                    <SocialLogo src={instagramImage}/>
                </a>
                <a href="https://twitter.com/Ortiz_Academy" rel="noreferrer" target="_blank">
                    <SocialLogo src={twitterImage}/>
                </a>
                <a href="https://www.youtube.com/channel/UC6OzxMmOkpiN7T73Pjf54pg" rel="noreferrer" target="_blank">
                    <SocialLogo src={youtubeImage}/>
                </a>

            </SocialLogoWrapper>
            <MainSlogan></MainSlogan>
        </HeaderRightAlignedWrapper>
    </TopHeaderWrapper>
)

const CustomNavLink = styled(NavLink)`
  padding: 15px 24px;
  background-color: #064CA5;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  font-family: "Open Sans", sans-serif;

  transition: 0.13s ease-in-out;

  :hover {
    background-color: #3870b7;
  }

  &.active {
    background-color: #3870b7;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #064CA5;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const MobileNavWrapper = styled.div`
  @media only screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  display: none;
`;

const MenuWrapper = styled.div`
  width: 100%;
  background-color: #222;
  box-shadow: 0 0 6px #000;
  position: absolute;
  top: 0;
  padding-top: 70px;
`;

const HamburgerWrapper = styled.div`
  margin: 20px 20px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const MenuItem = styled(NavLink)`
  padding: 10px 10px;
  width: 100%;
  text-align: center;
  display: block;
  text-decoration: none;
  color: white;
`;

const MobileNav = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    }
    return (
        <MobileNavWrapper>
            <HamburgerWrapper>
                <Hamburger onClick={toggleMenu}/>
            </HamburgerWrapper>
            {isExpanded &&
            <MenuWrapper>
                <MenuItem exact activeClassName="active" to={links.home}>Home</MenuItem>
                <MenuItem exact activeClassName="active" to={links.faq}>Frequently asked questions</MenuItem>
                <MenuItem exact activeClassName="active" to={links.contact}>Contact</MenuItem>
                <MenuItem exact activeClassName="active" to={links.timeTable}>Time table</MenuItem>
                <MenuItem exact activeClassName="active" to={links.testimonials}>Testimonials</MenuItem>
                <MenuItem exact activeClassName="active" to={links.freeClasses}>Free classes</MenuItem>
            </MenuWrapper>}
        </MobileNavWrapper>
    );
}

const NavBar = () => {
    return (
        <NavWrapper>
            <CustomNavLink exact activeClassName="active" to={links.home}>
                HOME
            </CustomNavLink>
            <CustomNavLink exact activeClassName="active" to={links.freeClasses}>
                FREE MARTIAL ARTS TRIAL CLASSES
            </CustomNavLink>
            <CustomNavLink exact activeClassName="active" to={links.testimonials}>
                TESTIMONIALS
            </CustomNavLink>
            <CustomNavLink exact activeClassName="active" to={links.faq}>
                FREQUENTLY ASKED QUESTIONS
            </CustomNavLink>
            <CustomNavLink exact activeClassName="active" to={links.contact}>
                CONTACT
            </CustomNavLink>
            <CustomNavLink exact activeClassName="active" to={links.timeTable}>
                CLASS TIMES
            </CustomNavLink>
        </NavWrapper>
    )
};

const HeaderView = () => {
    return (
        <Header>
            <div>
                <MobileNav/>
                <TopHeader/>
                <NavBar/>
            </div>
        </Header>
    )
};

export default HeaderView;