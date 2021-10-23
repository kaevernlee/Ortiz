import styled from 'styled-components';
import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import * as constants from "../../common/constants"; 


const PhotosWrapper = constants.PhotosWrapper
const ArticleWrapper = constants.ArticleWrapper
const TileWrapper = constants.TileWrapper
const Tile = constants.Tile
const Quote = constants.Quote
const Card = constants.Card

const Section = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  margin: 20px;
`;

const Photos = () => {
    return (
        <PhotosWrapper>
<img src="https://cdn2.outdoorphotographer.com/2021/05/justin-black-something-completely-different-5.jpg" alt="BJJ, MMA and Muay Thai" draggable="false" />  
         </PhotosWrapper>
    )
}

const Introduction = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Introduction to Ortiz Martial Arts Academy</SubTitle>
            <p>
                With state of the art modern facilities and highly skilled instructors, Ortiz Martial 
                Arts Academy is the best place to learn the techniques required to become a skilful fighter – 
                or simply protect yourself on the street. We place an emphasis on correct technique as well as 
                respect, ensuring our students understand the responsibility that goes with learning these ancient arts.
            </p>
            <p>
                Located in Mona Vale, we offer martial arts classes for kids and adults – including Jiu Jitsu and MMA – to 
                those located on the Northern Beaches, from Newport to Warriewood and everywhere in between. For more 
                information regarding our classes, don’t hesitate to get in touch today on (02) 9979 7846.
            </p>
         </ArticleWrapper>
    )
}

const QuoteOne = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Begin Your Martial Arts Journey</SubTitle>
            <p>At Ortiz Academy learning martial arts is an exciting & fun journey</p>
            <p>Get Fit, Learn Self-defense and improve your State of Mind.</p>
         </ArticleWrapper>
    )
}

const FriendlyEnv = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Friendly Environment</SubTitle>
            <p>
                We care about our students. We help them master effective techniques while imparting 
                confidence, discipline & respect.
            </p>
            <p>Learn the art of self-discipline with our friendly instructors Edson and Thiago Ortiz.</p>
            <p>
                If you are looking to improve your confidence, strength and fitness – as well as your general 
                wellbeing – Ortiz Martial Arts Academy is the best place to learn martial arts in the Northern Beaches 
                region. From Jiu Jitsu and Muay Thai to Mixed Martial Arts (MMA) and self-defence classes, there are options 
                to suit participants of all ages and levels of experience.
            </p>
         </ArticleWrapper>
    )
}

const History = () => {
    return (
        <ArticleWrapper>
            <SubTitle>The History of MMA, Brazilian Jiu Jitsu or Muay Thai</SubTitle>
            <p>
                Martial arts techniques may date back to ancient times, but 
                they are still just as relevant in the modern world. The training 
                methods used by warriors of a bygone era translate to today’s society, 
                delivering a range of sports that foster athletes with unrivalled strength, 
                fitness and mental ability.
            </p>
            <p>
                While Muay Thai dates back to the Siamese warriors of ancient times, Brazilian 
                Jiu Jitsu (BJJ) and MMA are relatively new combat sports that harness techniques 
                from a range of other martial arts. For example, BJJ draws on Judo and Japanese 
                Jujutsu, while MMA incorporates moves from BJJ, Muay Thai, Judo and even wrestling.
            </p>
        </ArticleWrapper>
    )
}

const StartJourney = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Start Your Journey With The Ortiz</SubTitle>
            <p>
                If you are searching for an academy that offers martial arts 
                classes for kids, you’ll be pleased to know that we offer specialised 
                BJJ classes for teenagers and children. We also offer self-defence 
                classes for young participants, which are designed to teach them defensive 
                tactics that help them to protect themselves.
            </p>
            
        </ArticleWrapper>
    )
}

const Tiles = () => {
    return (
        <TileWrapper>
            <Tile>
                <SubTitle href="">Brazilian Jiu Jitsu</SubTitle>
                <image />
                <p>Overcome stronger opponents, improve physical fitness & self confidence.</p>
            </Tile>
            <Tile>
                <SubTitle>Muay Thai</SubTitle>
                <image />
                <p>Use all joints and limbs as weapons with sophisticated training.</p>
            </Tile>
            <Tile>
                <SubTitle>Mixed Martial Arts</SubTitle>
                <image />
                <p>Build yourself into the ultimate weapon with exciting, diverse techniques</p>
            </Tile>
        </TileWrapper>
    )
}

const JoinNow = () => {
    return (
         <ArticleWrapper>
            <Tile>
                <Quote>
                    <p>
                        <strong>"</strong>
                        Edson has been a fantastic addition to my 6.5 years old life. Not only
                        does he teach the kids respect for the sport but reminds them with every
                        lesson that they need to make lifestyle choices, whether its healthy 
                        eating, respecting your elders, authority, and peers. This is all 
                        balanced with fun, fitness and encouragement. I look forward to 
                        introducing my 2 other boys to Edson’s teachings through BJJ <strong>- Bob Smith</strong>
                        <strong>"</strong>
                    </p>
                </Quote>
                <MainTitle>Join Now</MainTitle>
            </Tile>
        </ArticleWrapper>
    )
}

const Home = () => {
    return (
        <main> 
            <Card>
                <Photos />
                <Introduction />
                <QuoteOne />
                <FriendlyEnv />
                <History />
                <StartJourney />
                <Tiles />
                <JoinNow />
            </Card>
        </main>
    
    )
};

export default Home;