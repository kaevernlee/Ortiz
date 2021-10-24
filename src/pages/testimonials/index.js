import styled from 'styled-components';
import {MainTitle, RegularText} from "../../common/commonText";
import * as constants from "../../common/constants";

const TileWrapper = constants.TileWrapper
const Testimonial = styled.div`
    display: block; 
    text-align: left;
    width: 100%;
    margin: auto;
`;

const Entry = ({name, testimonial}) => {
    return (
        <TileWrapper>
            <Testimonial>
                    <RegularText>
                        {testimonial}
                    </RegularText>
                <strong>{name}</strong>
            </Testimonial>
        </TileWrapper>
    )
}

const LawrenceEss = () => {
    return(
        <Entry 
            name="Lawrence Ess"
            testimonial="Eddy is unreal! My two boys have been doing jujitsu for 6 months now. He is patient and encouraging as well as demanding of them. Thanks to Eddy they have found a sport that will give them self discipline and something that they will be able to carry on for the rest of their lives."
        />
    )
}

const CoryWyllieGray = () => {
    return(
        <Entry 
            name="Cory Wyllie-Gray"
            testimonial="Edson Ortiz is a sensational teacher & coach. I am so lucky to have him guiding me in BJJ. He encourages me every single class. I am proud to be part of his academy."
        />
    )
}

const AntheaGilmore = () => {
    return(
        <Entry 
            name="Anthea Gilmore"
            testimonial="Edson has been a fantastic addition to my 6.5 years old life. Not only does he teach the kids respect for the sport but reminds them with every lesson that they need to make lifestyle choices, whether its healthy eating, respecting your elders, authority, and peers. This is all balanced with fun, fitness and encouragement. I look forward to introducing my 2 other boys to Edson’s teachings through BJJ."
        />
    )
}

const MattGillard = () => {
    return(
        <Entry 
            name="MattGillard"
            testimonial="I started Jiu Jitsu to increase my self-confidence and increase my physical fitness. Edson has made this happen, he is a brilliant instructor and an honest man. I have learnt much from Eddie, not just Brazilian Jiu Jitsu but he has changed my attitude toward many things."
        />
    )
}

const Testimonials = () => {
    return (
    <div>
        <MainTitle>Testimonials</MainTitle>
        <LawrenceEss />
        <CoryWyllieGray />
        <AntheaGilmore />
        <MattGillard />
    </div>
    )
}

export default Testimonials;

