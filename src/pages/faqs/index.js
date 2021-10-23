import styled from 'styled-components';
import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import * as constants from "../../common/constants";

const TileWrapper = constants.TileWrapper
const Tile = constants.Tile
const Card = constants.Card

const onClick = () => {
        console.log('Button was clicked!')
}

const HaveBegClasses = () => {
    return (
        <TileWrapper>
            <Tile onClick={onClick}>
                <SubTitle>Do you have beginner's classes?</SubTitle>
                <p>
                    Yes, we have fundamental classes covering the basics of BJJ. The Thai Boxing and MMA classes are open to all and students will be grouped based on their skill level.
                </p>
            </Tile>
        </TileWrapper>
    )
}

const IsGoodAcademy = () => {
    return (
        <TileWrapper>
            <Tile>
                <SubTitle onClick={onClick}>Is this a good academy to learn martial arts?</SubTitle>
                <p>
                    Ortiz Martial Arts Academy is the perfect place to begin your journey. The instructors are friendly and caring, the students hold no ego, the establishment is professional and probably one of the best in NSW. We strive to make this the best place to learn. Our academy isn’t a ‘fight gym’, instead it is a place where members of the community come to learn martial arts in a fun and relaxed environment.
                </p>
            </Tile>
        </TileWrapper>
    )
}

const FirstExpectations = () => {
    return (
        <TileWrapper>
            <Tile>
                <SubTitle onClick={onClick}>What can I expect from my first class?</SubTitle>
                <p>
                    First you will feel very welcome from the moment you contact us. You will meet a nice group of people who hold no ego in the class. The initial classes will help you get fit and prepare your body for this activity. Understanding the fundamentals is important. You will learn the basics that form the foundation to all martial arts techniques.
                </p>
            </Tile>
        </TileWrapper>
    )
}

const FAQPage = () => {
    return (
        <div>
            <MainTitle>Frequently Asked Questions</MainTitle>
            <HaveBegClasses />
            <IsGoodAcademy />
            <FirstExpectations />
        </div>
    )
};



export default FAQPage;