import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import * as constants from "../../common/constants"; 

import photo_mma from "../../assets/home-assets/mma-class.jpg"

const PhotosWrapper = constants.PhotosWrapper
const Photo = constants.Photo
const ArticleWrapper = constants.ArticleWrapper
const TileWrapper = constants.TileWrapper
const Tile = constants.Tile
const Quote = constants.Quote

const PhotoObject = ({img, em=0}) => {
    return (
            <PhotosWrapper>
                <Photo src={img} margin-top={em}/>
            </PhotosWrapper>
    )
}

const Introduction = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Introduction to Ortiz Martial Arts Academy</SubTitle>
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
            <SubTitle>Begin Your Martial Arts Journey</SubTitle>
            <RegularText>At Ortiz Academy learning martial arts is an exciting & fun journey</RegularText>
            <RegularText>Get Fit, Learn Self-defense and improve your State of Mind.</RegularText>
         </ArticleWrapper>
    )
}

const FriendlyEnv = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Friendly Environment</SubTitle>
            <RegularText>
                We care about our students. We help them master effective techniques while imparting 
                confidence, discipline & respect.
            </RegularText>
            <RegularText>Learn the art of self-discipline with our friendly instructors Edson and Thiago Ortiz.</RegularText>
            <RegularText>
                If you are looking to improve your confidence, strength and fitness – as well as your general 
                wellbeing – Ortiz Martial Arts Academy is the best place to learn martial arts in the Northern Beaches 
                region. From Jiu Jitsu and Muay Thai to Mixed Martial Arts (MMA) and self-defence classes, there are options 
                to suit participants of all ages and levels of experience.
            </RegularText>
         </ArticleWrapper>
    )
}

const History = () => {
    return (
        <ArticleWrapper>
            <SubTitle>The History of MMA, Brazilian Jiu Jitsu or Muay Thai</SubTitle>
            <RegularText>
                Martial arts techniques may date back to ancient times, but 
                they are still just as relevant in the modern world. The training 
                methods used by warriors of a bygone era translate to today’s society, 
                delivering a range of sports that foster athletes with unrivalled strength, 
                fitness and mental ability.
            </RegularText>
            <RegularText>
                While Muay Thai dates back to the Siamese warriors of ancient times, Brazilian 
                Jiu Jitsu (BJJ) and MMA are relatively new combat sports that harness techniques 
                from a range of other martial arts. For example, BJJ draws on Judo and Japanese 
                Jujutsu, while MMA incorporates moves from BJJ, Muay Thai, Judo and even wrestling.
            </RegularText>
        </ArticleWrapper>
    )
}

const StartJourney = () => {
    return (
        <ArticleWrapper>
            <SubTitle>Start Your Journey With The Ortiz</SubTitle>
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

const Tiles = () => {
    return (
        <TileWrapper>
            <Tile>
                <SubTitle href="">Brazilian Jiu Jitsu</SubTitle>
                <image />
                <RegularText>Overcome stronger opponents, improve physical fitness & self confidence.</RegularText>
            </Tile>
            <Tile>
                <SubTitle>Muay Thai</SubTitle>
                <image />
                <RegularText>Use all joints and limbs as weapons with sophisticated training.</RegularText>
            </Tile>
            <Tile>
                <SubTitle>Mixed Martial Arts</SubTitle>
                <image />
                <RegularText>Build yourself into the ultimate weapon with exciting, diverse techniques</RegularText>
            </Tile>
        </TileWrapper>
    )
}

const JoinNow = () => {
    return (
         <ArticleWrapper>
            <Tile>
                <Quote>
                    <RegularText>
                        <strong>"</strong>
                        Edson has been a fantastic addition to my 6.5 years old life. Not only
                        does he teach the kids respect for the sport but reminds them with every
                        lesson that they need to make lifestyle choices, whether its healthy 
                        eating, respecting your elders, authority, and peers. This is all 
                        balanced with fun, fitness and encouragement. I look forward to 
                        introducing my 2 other boys to Edson’s teachings through BJJ <strong>- Bob Smith</strong>
                        <strong>"</strong>
                    </RegularText>
                </Quote>
                <MainTitle>Join Now</MainTitle>
            </Tile>
        </ArticleWrapper>
    )
}

const Home = () => {
    return (
        <main> 
            <PhotoObject img={photo_mma} em='-1.9em' />
            <Introduction />
            <PhotoObject img={photo_mma} />
            <QuoteOne />
            <FriendlyEnv />
            <History />
            <StartJourney />
            <Tiles />
            <JoinNow />
        </main>
    )
};

export default Home;