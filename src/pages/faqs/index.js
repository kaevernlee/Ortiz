import styled from 'styled-components';
import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import * as constants from "../../common/constants";
import links from '../../utils/links';
import React from 'react'


const TileWrapper = constants.TileWrapper
const Tile = constants.Tile
const Card = constants.Card


const FAQ = ({question, answer}) => {
  const [show, toggleShow] = React.useState(false);

    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>{question}</SubTitle>
                {show && <p>{answer}</p>}
            </Tile>
        </TileWrapper>
    )
}


const HaveBegClasses = () => {
    return (
        <FAQ 
            question="Do you have beginner's classes?" 
            answer="Yes, we have fundamental classes covering the basics of BJJ. The Thai Boxing and MMA classes are open to all and students will be grouped based on their skill level."
            pid='1'
        />
    )
}

const IsGoodAcademy = () => {
    return (
        <FAQ 
            question="Is this a good academy to learn martial arts?" 
            answer="Ortiz Martial Arts Academy is the perfect place to begin your journey. The instructors are friendly and caring, the students hold no ego, the establishment is professional and probably one of the best in NSW. We strive to make this the best place to learn. Our academy isn’t a ‘fight gym’, instead it is a place where members of the community come to learn martial arts in a fun and relaxed environment."
        />
    )
}

const FirstExpectations = () => {
    return (
        <FAQ 
            question="What can I expect from my first class?" 
            answer="First you will feel very welcome from the moment you contact us. You will meet a nice group of people who hold no ego in the class. The initial classes will help you get fit and prepare your body for this activity. Understanding the fundamentals is important. You will learn the basics that form the foundation to all martial arts techniques."
        />
    )
}

const Pricing = () => {
    return (
        <FAQ 
            question="What is the pricing structure for the classes?" 
            answer="We have a flexible pricing structure. We offer our students different types of memberships / payments methods. Prices vary based on how many times a week you plan to train. Choose one that suits you. Please call us or enquire at the reception."
        />
    )
}

const Discounts = () => {
    return (
        <FAQ 
            question="Do you offer family discounts?" 
            answer="Yes, if your family has more than 3 members enrolled with us you are eligible to get the family discount. Please enquire at the reception."
        />
    )
}

const FreeClass = () => {
    const [show, toggleShow] = React.useState(false);

    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>Can I try the classes before deciding to sign up?</SubTitle>
                {show && <p>
                    Yes, indeed. We offer a FREE trial to any legitimate new students to come along and try before you enroll. This gives you the opportunity to see our facilities and meet the instructors and students. See <a href={links.freeClasses}>Free Classes</a> for more information.
                </p>}
            </Tile>
        </TileWrapper>
    )
}

const Attire = () => {
    const [show, toggleShow] = React.useState(false);
    
    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>What should I wear for my first class?</SubTitle>
                {show && <p>
                    If you have any other Gi (uniform) from another martial art school you can use that for the free trial classes. Otherwise wear T-shirt and shorts or exercise pants, something you don’t mind getting ripped or stretched. Avoid using clothes with pockets and zippers. Also bring a towel and a bottle of water. See <a href={links.freeClasses}>Free Classes</a> for more information.
                </p>}
            </Tile>
        </TileWrapper>
    )
}

const FirstTimeAttire = () => {
    const [show, toggleShow] = React.useState(false);

    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>Who/what should I bring for my first FREE trial?</SubTitle>
                {show && <p>
                    For FREE trial enrollment please bring a photo ID like driver’s license or Student ID if you are under 18 you must be accompanied by your parent/guardian. Please arrive 20 minutes prior to the class to fill up the form. See <a href={links.freeClasses}>Free Classes</a> for more information.
                </p>}
            </Tile>
        </TileWrapper>
    )
}

const PriorExp = () => {
    const [show, toggleShow] = React.useState(false);
    
    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>I have no prior Martial Arts experience.</SubTitle>
                {show && <p>
                    No experience is necessary. Just walk in, register and prepare to have a good time. See for yourself how much fun and exciting it can be. See <a href={links.freeClasses}>Free Classes</a> for more information.
                </p>}
            </Tile>
        </TileWrapper>
    )
}

const ClassTime = () => {
    return (
        <FAQ 
            question="What is a BJJ class like and how long does it last?" 
            answer="Kids classes last for 1 hour. For Teens and Adults, the fundamentals last 40 minutes and intermediate for an hour. Classes includes Warm-ups and conditioning exercises, Drills, Techniques of the day, Wrestling or Roll etc."
        />
    )
}

const BjjDifference = () => {
    return (
        <FAQ 
            question="Brazilian Jiu Jitsu vs. Other martial arts?" 
            answer="BJJ is the only self defense system that effectively addresses ground grappling, the most important and neglected aspect of any real fight. Martial Arts like Tae kwon do, Kung fu, Karate and hapkido miss out on this aspect of a real fight. 95% of fights end up in a clinch and go to the ground. And when it does, it is more likely that one will be at the mercy of the BJJ fighter. Remember in a street fight it is very difficult to use fancy kicks, deadly punches or pressure points etc… When you’re looking for a martial art, beware of those that teach only one aspect of a fight giving you a false sense of security. If you’re not learning to defend yourself on the ground, then you are not fully prepared."
        />
    )
}

const BjjKids = () => {
    return (
        <FAQ 
            question="Is Brazilian Jiu Jitsu good for kids?" 
            answer="The Kids Program integrates Skill-building games with physical education and self-defense techniques. This helps improve coordination, motor skills, agility and flexibility. BJJ is a fantastic way to empower the kids with confidence and discipline. They learn to deal with bullies without having to punch or kick. Our system is based on friendship and fun and I’m sure your kid will love learning Martial Arts with us."
        />
    )
}

const AgeRestrictions = () => {
    const [show, toggleShow] = React.useState(false);

    return (
        <TileWrapper onClick={() => toggleShow(!show)}>
            <Tile>
                <SubTitle>Are there any age restrictions?</SubTitle>
                {show && <p> 
                    Yes. Check your age group – Kids (5 – 9), Teens (10 – 15) & Adults (16 +). Look at the <a href={links.timeTable}>Time Table</a> to see what classes are available for your age group. It is possible for a kid younger than 5 to enroll based on maturity, this can be confirmed in our <a href={links.freeClasses}>Free Trial</a> class. For MMA you must be 13 years or older.
                </p>}
            </Tile>
        </TileWrapper>
    )
}

const Rank = () => {
    return (
        <FAQ 
            question="Can I transfer my current rank from another academy?" 
            answer="If you already hold a belt from another school you can continue with the same grade. We’ll need to confirm that your knowledge of techniques and sparring experience matches our standards before we grade you to the next level. If your belt or rank was awarded by a non-regulated federation, you will be given a new rank/belt based on your skill level and as officially prescribed by the International Federation."
        />
    )
}

const Row = styled.div`width: 100%; overflow: hidden;`;
const Left = styled.div`width: 600px; float: left;`;
const Right = styled.div`margin-left: 620px;`;

const FAQPage = () => {
    return (
        <div>
            <MainTitle>Frequently Asked Questions</MainTitle>
            
            <Row>
                <Left><HaveBegClasses /></Left>
                <Right><IsGoodAcademy /></Right>
            </Row>

            <Row>
                <Left><FirstExpectations /></Left>
                <Right><Pricing /></Right>
            </Row>

            <Row>
                <Left><Discounts /></Left>
                <Right><FreeClass /></Right>
            </Row>

            <Row>
                <Left><Attire /></Left>
                <Right><FirstTimeAttire /></Right>
            </Row>

            <Row>
                <Left><PriorExp /></Left>
                <Right><ClassTime /></Right>
            </Row>
            
            <Row>
                <Left> <BjjDifference /></Left>
                <Right><BjjKids /></Right>
            </Row>

            <Row>
                <Left> <AgeRestrictions /></Left>
                <Right><Rank /></Right>
            </Row>
        </div>
    )
};



export default FAQPage;