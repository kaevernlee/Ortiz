import {NavLink} from "react-router-dom";
import styled from 'styled-components';

export const Header = styled.header`
  border-top: #F70606 3px solid;
`;

export const HeaderLeftAlignedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0 20px;
    text-align: center
  }
`;

export const HeaderImage = styled.img`
  margin: 18px 0;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`;

export const HeaderRightAlignedWrapper = styled.div`
  margin-right: 30px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media only screen and (max-width: 700px) {
    align-items: center;
    margin-right: 0;
  }
`;

export const HeaderTitle = styled.a`
  font-family: Oswald,sans-serif
;
  font-size: 35px;
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

export const HeaderSubTitle = styled.div`
    @media only screen and (max-width: 700px) {
      text-align: center;
    }
`;

export const SocialLogo = styled.img`
    width: 30px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    margin: 0 3px;
    :hover {
        transform: scale(1.15);
    }
`;

export const SocialLogoWrapper = styled.div`
    display: flex;
`;

export const MainSlogan = styled.div`
    font-size: 50px;
    font-style: italic;
    color: rgba(50, 81, 146, 0.39);
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const TopHeaderWrapper = styled.div`
  width: 100%;
    display: flex;
    flex-direction: row;
  align-items: stretch;
    flex: 0 0 100%;
    justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CustomNavLink = styled(NavLink)`
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

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #064CA5;
`;

export const PhotosWrapper = styled.div`  
  margin-left: -1.87em;
  margin-right: -1.9em;
  margin-top: ;
`;

export const Photo = styled.img`  
  width: 100%;
`;


export const ArticleWrapper = styled.div`
  display: block; 
  text-align: center;
  width: 1000px;
  margin: auto;
`;

export const TileWrapper = styled.div`
    // display: flex
    padding: 20px;
    background: #fff;
    border-bottom: rgba(0, 0, 0, .13) 1px solid;
    box-shadow: 0 0 5px rgb(0 0 0 / 10%);
    //margin: 50px;
`;

export const Tile = styled.div`
    display: block; 
    text-align: center;
    max-width: 1000px;
    margin: auto;
`;

export const Quote = styled.div`
    display: block; 
    text-align: center;
    width: 1000px;
    margin: auto;
`;

export const Card = styled.div`
    padding: 20px;
    background: #fff;
    border-bottom: rgba(0, 0, 0, .13) 1px solid;
    box-shadow: 0 0 5px rgb(0 0 0 / 10%);
`;

export const Timetable = styled.img`
    width: 100%;
    height: auto;
`;

