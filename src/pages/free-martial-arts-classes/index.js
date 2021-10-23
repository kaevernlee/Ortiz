import styled from 'styled-components';
import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import Card from "../../common/card";
import {Link} from "react-router-dom";
import links from "../../utils/links";

const Wrapper = styled.div`
  margin: 20px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const FreeMartialArtsPage = () => {
    return (
        <Card>
            <Wrapper>
                <MainTitle>Free Martial Arts Trial Classes</MainTitle>
                <Section>
                    <SubTitle> What to expect</SubTitle>
                    <RegularText>1. Familiarize yourself with our school</RegularText>
                    <RegularText>2. Meet the instructors and students</RegularText>
                    <RegularText>3. Check out the facilities provided</RegularText>
                    <RegularText>4. Experience the classes first hand</RegularText>
                    <RegularText>5. Get started on some basic techniques</RegularText>
                    <RegularText>6. Try out BJJ, MMA and Thai Boxing</RegularText>
                </Section>
                <Section>
                    <SubTitle>Tips</SubTitle>
                    <RegularText>Check the <Link href={links.timeTable}>Time Table</Link> and decide on the class you wish to attend.</RegularText>
                    <RegularText>Check the <Link href={links.contact}>Map for the location</Link> of our school. See Parking Info below.</RegularText>
                    <RegularText>Arrive at the academy at least 20 minutes prior to the class you are attending.</RegularText>
                    <RegularText>Fill up the short application form provided at the entrance.</RegularText>
                    <RegularText>Introduce yourself to the instructor and join the class.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Bring</SubTitle>
                    <RegularText>Your Driver's license or an ID card. (If you're younger than 18 you must be accompanied by a parent or carer)</RegularText>
                    <RegularText>A bottle of water is recommended</RegularText>
                    <RegularText>Bring a towel</RegularText>
                    <RegularText>You can also buy refreshments at the academy</RegularText>
                </Section>
                <Section>
                    <SubTitle>Attire</SubTitle>
                    <RegularText>Do NOT wear anything with extra pockets, belt or zippers.</RegularText>
                    <RegularText>For Brazilian Jiu-Jitsu (BJJ) and MMA wear loose fitting clothing (T-shirt and shorts / track pants)</RegularText>
                    <RegularText>For Muay Thai or Kickboxing wear T-shirt and shorts and if you have boxing gloves you could bring them along</RegularText>
                </Section>
                <Section>
                    <SubTitle>Footwear</SubTitle>
                    <RegularText>Please keep your feet clean. Do not come barefoot to the academy.</RegularText>
                    <RegularText>Always wear sandals or shoes and then leave them at the change-room or bedside the mat.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Hair and Nails</SubTitle>
                    <RegularText>If you have long hair please tie it into a ponytail or bun during class.</RegularText>
                    <RegularText>Make sure your fingernails and toenails are trimmed.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Adornments</SubTitle>
                    <RegularText>If you have ear rings, jewellery, watch or exposed piercings please remove them prior to training to avoid injuries.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Warm-ups</SubTitle>
                    <RegularText>Don't worry if you don't get the exercises right, nobody does on their first day, it will take some practice.</RegularText>
                    <RegularText>During warm-ups it is important to follow your own pace and not that of others.</RegularText>
                    <RegularText>Remember we are here to guide you and soon you will be a Pro.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Have FUN</SubTitle>
                    <RegularText>Prepare to have lots of fun and look forward to the start of a wonderful journey in the world of Martial Arts.</RegularText>
                </Section>
                <Section>
                    <SubTitle>After the Free Trial Classes</SubTitle>
                    <RegularText>If you wish to join the school Please take note of the following:</RegularText>
                    <RegularText>For BJJ please wear a (GI or Uniform).</RegularText>
                    <RegularText>For Thai Boxing please equip yourself with: 16oz Gloves, Mouth Guard, Hand Wraps, Chin Pads.</RegularText>
                </Section>
                <Section>
                    <SubTitle>Parking</SubTitle>
                    <RegularText>There is plenty of parking available at the street or in the complex.</RegularText>
                    <RegularText>Please do not park in other business parking spots</RegularText>
                    <RegularText>Please do not park at the entrance of our Academy.</RegularText>
                </Section>
            </Wrapper>
        </Card>
    )
};

export default FreeMartialArtsPage;