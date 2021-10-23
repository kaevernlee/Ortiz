import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import links from "../utils/links";
import headerImage from '../assets/header-assets/logo.png'
import facebookImage from '../assets/header-assets/facebook.png'
import twitterImage from '../assets/header-assets/twitter.png'
import youtubeImage from '../assets/header-assets/youtube.png'
import instagramImage from '../assets/header-assets/instagram.png'
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
                <HeaderImage src={headerImage} />
            </a>    
            <HeaderText>
                <HeaderTitle>Ortiz Martial Arts Academy</HeaderTitle>
                <HeaderSubTitle>MONA VALE • NSW • AUSTRALIA</HeaderSubTitle>
            </HeaderText>
        </HeaderLeftAlignedWrapper>
        <HeaderRightAlignedWrapper>
            <SocialLogoWrapper>
                <a href="https://www.facebook.com/ortizmartialarts/" target="_blank">
                    <SocialLogo src={facebookImage}/>
                </a>
                <a href="https://www.instagram.com/ortiz_academy/" target="_blank">
                    <SocialLogo src={instagramImage}/>
                </a>
                <a href="https://twitter.com/Ortiz_Academy" target="_blank">
                    <SocialLogo src={twitterImage}/>
                </a>
                <a href="https://www.youtube.com/channel/UC6OzxMmOkpiN7T73Pjf54pg" target="_blank">
                    <SocialLogo src={youtubeImage}/>
                </a>
                
            </SocialLogoWrapper>
            <MainSlogan>The best place to learn martial arts</MainSlogan>
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
`;

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

export default () => {
    return (
        <Header>
            <div>
            <TopHeader />
            <NavBar />
            </div>
        </Header>
    )
};