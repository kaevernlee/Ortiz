import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import * as constants from "../../common/constants";
import styled from "styled-components";

import photo_mma from "../../assets/home-assets/mma-class.jpg"
import adults_class from "../../assets/home-assets/bjj-adults-class.jpg"
import kids_class from "../../assets/home-assets/bjj-kids.jpg"
import adults_exercise from "../../assets/home-assets/bjj-adults-exercises.jpg"
import champion_photo from "../../assets/home-assets/champions-martial-arts.jpg"
import thai_boxing from "../../assets/home-assets/thaiboxing-class.jpg"

import bjj_showcase from "../../assets/home-assets/bjj-showcase.jpg"
import thai_boxing_showcase from "../../assets/home-assets/thai-boxing-showcase.jpg"
import mma_showcase from "../../assets/home-assets/mma-showcase.jpg"
import links from "../../utils/links";
import {Link} from "react-router-dom";


const PhotosWrapper = constants.PhotosWrapper
const Photo = constants.Photo
const ArticleWrapper = constants.ArticleWrapper
const TileWrapper = constants.TileWrapper
const Tile = constants.Tile
const Quote = constants.Quote
const MainSlogan = constants.MainSlogan

const PhotoObject = ({img}) => {
    return (
            <PhotosWrapper>
                <Photo src={img} />
            </PhotosWrapper>
    )
}

const Introduction = () => {
    return (
        <ArticleWrapper>
            <MainTitle>Introduction to Ortiz Martial Arts Academy</MainTitle>
            <RegularText>
                With state of the art modern facilities and highly skilled instructors, Ortiz Martial 
                Arts Academy is the best place to learn the techniques required to become a skilful fighter – 
                or simply protect yourself on the street. We place an emphasis on correct technique as well as 
                respect, ensuring our students understand the responsibility that goes with learning these ancient arts.
            </RegularText>
            <RegularText>
                Located in Mona Vale, we offer martial arts classes for kids and adults – including Jiu Jitsu and MMA – to 
                those located on the Northern Beaches, from Newport to Warriewood and everywhere in between. For more 
                information regarding our classes, don’t hesitate to get in touch today on (02) 9979 7846.
            </RegularText>
         </ArticleWrapper>
    )
}

const QuoteOne = () => {
    return (
        <ArticleWrapper>
            <MainTitle>Begin Your Martial Arts Journey</MainTitle>
            <RegularText>At Ortiz Academy learning martial arts is an exciting & fun journey</RegularText>
            <RegularText>Get Fit, Learn Self-defense and improve your State of Mind.</RegularText>
         </ArticleWrapper>
    )
}

const FriendlyEnv = () => {
    return (
        <ArticleWrapper>
            <MainTitle>Friendly Environment</MainTitle>
            <RegularText>
                We care about our students. We help them master effective techniques while imparting 
                confidence, discipline & respect.
            </RegularText>
            <RegularText>Learn the art of self-discipline with our friendly instructors Edson and Thiago Ortiz.</RegularText>
            <RegularText>
                If you are looking to improve your confidence, strength and fitness – as well as your general 
                wellbeing – Ortiz Martial Arts Academy is the best place to learn martial arts in the Northern Beaches 
                region. From Jiu Jitsu, Mixed Martial Arts (MMA) and self-defence classes, there are options 
                to suit participants of all ages and levels of experience.
            </RegularText>
         </ArticleWrapper>
    )
}

const History = () => {
    return (
        <ArticleWrapper>
            <MainTitle>The History of MMA and Brazilian Jiu Jitsu</MainTitle>
            <RegularText>
                Martial arts techniques may date back to ancient times, but 
                they are still just as relevant in the modern world. The training 
                methods used by warriors of a bygone era translate to today’s society, 
                delivering a range of sports that foster athletes with unrivalled strength, 
                fitness and mental ability.
            </RegularText>
            <RegularText>
                Brazilian Jiu Jitsu (BJJ) and MMA are relatively new combat sports that harness techniques 
                from a range of other martial arts. For example, BJJ draws on Judo and Japanese 
                Jujutsu, while MMA incorporates moves from BJJ, Muay Thai, Judo and even wrestling.
            </RegularText>
        </ArticleWrapper>
    )
}

const StartJourney = () => {
    return (
        <ArticleWrapper>
            <MainTitle>Start Your Journey With The Ortiz Family</MainTitle>
            <RegularText>
                If you are searching for an academy that offers martial arts 
                classes for kids, you’ll be pleased to know that we offer specialised 
                BJJ classes for teenagers and children. We also offer self-defence 
                classes for young participants, which are designed to teach them defensive 
                tactics that help them to protect themselves.
            </RegularText>
            
        </ArticleWrapper>
    )
}


const Row = styled.div`
    /* width: 100%;
    float: left;
    text-align: center; */
    display: flex;
    text-align: center;
    @media only screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

const Cell = styled.div`
    width: 50%; 
    margin: 80px 2px 100px 2px;
    float: left;
    padding: 20px;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

const Tiles = () => {
    return (
            <Row>
                <Cell>
                    <MainTitle href="">Brazilian Jiu Jitsu</MainTitle>
                    <Photo src={bjj_showcase}/>
                    <RegularText>Overcome stronger opponents, improve physical fitness & self confidence.</RegularText>
                </Cell>
                {/* TODO: Need to update this section to self defence */}
                {/* <Cell>
                    <MainTitle>Muay Thai</MainTitle>
                    <Photo src={thai_boxing_showcase}/>
                    <RegularText>Use all joints and limbs as weapons with sophisticated training.</RegularText>
                </Cell> */}
                <Cell>
                    <MainTitle>Mixed Martial Arts</MainTitle>
                    <Photo src={mma_showcase}/>
                    <RegularText>Build yourself into the ultimate weapon with exciting, diverse techniques</RegularText>
                </Cell>
            </Row>
    )
}


// TODO: Need to refactor this copied and pasted
export const EndQuote = styled.div`
  display: block; 
  text-align: center;
  max-width: 1000px;
  margin: 10px auto 40px auto;
`;

const JoinNow = () => {
    return (
         <EndQuote >
            <Quote>
                <RegularText>
                    {/* <strong>"</strong>
                    Edson has been a fantastic addition to my 6.5 years old life. Not only
                    does he teach the kids respect for the sport but reminds them with every
                    lesson that they need to make lifestyle choices, whether its healthy 
                    eating, respecting your elders, authority, and peers. This is all 
                    balanced with fun, fitness and encouragement. I look forward to 
                    introducing my 2 other boys to Edson’s teachings through BJJ <strong>- Bob Smith</strong>
                    <strong>"</strong> */}
                </RegularText>
            </Quote>
            <MainTitle>
                {/* <a href={links.freeClasses}>Join Now</a> */}
                <Link to={links.freeClasses}>Join Now</Link>
            </MainTitle>
        </EndQuote>
    )
}

const Home = () => {
    return (
        <main> 
            <PhotoObject img={photo_mma} />
            <Introduction />
            <PhotoObject img={adults_class} />
            <QuoteOne />
            <PhotoObject img={kids_class} />
            <FriendlyEnv />
            <PhotoObject img={adults_exercise} />
            <History />
            <PhotoObject img={champion_photo} />
            <StartJourney />
            <PhotoObject img={thai_boxing} />
            <Tiles />
            <JoinNow />
        </main>
    )
};

export default Home;