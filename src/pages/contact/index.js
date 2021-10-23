import styled from 'styled-components';
import * as constants from "../../common/constants";
import {MainTitle, RegularText, SubTitle} from "../../common/commonText";

const Page = constants.Card
const Tile = constants.Tile
const Timetable = constants.Timetable

const Contact = () => {
    return (
        <Page>
            <MainTitle>Contact</MainTitle>
            <p>
                Serving the community of Mona Vale, Newport, Bilgola, Warriewood, Avalon, Bayview, Paradise Beach, Careel Bay, Clareville, Whale Beach, Palm Beach, Elanora Heights, Narrabeen, Collaroy and surrounding suburbs.
            </p>
            <iframe style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.434676643654!2d151.3039299157762!3d-33.67180721629407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d54a198bd2f29%3A0xff05be5697f014d9!2sOrtiz+Martial+Arts+Academy!5e0!3m2!1sen!2sau!4v1452210957581" width="100%" height="600" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            
            <SubTitle>Address</SubTitle>
            <RegularText>50/5 Ponderosa Parade</RegularText>
            <RegularText>Warriewood NSW 2102</RegularText>

            <SubTitle>Contact Us</SubTitle>
            <RegularText>Phone: <a href="tel: 02 9979 7846">02 9979 7846</a></RegularText>
            <RegularText>Mobile: <a href="tel: 0410 707 002">0410 707 002</a></RegularText>
            <RegularText>Email: <a href="mailto:edson.ortiz@me.com">edson.ortiz@me.com</a></RegularText>
        </Page>
    )
}

const Join = () => {
    return (
        <MainTitle>Join Today</MainTitle>
    )
}

const Main = () => {
    return (
        <div>
            <Contact />
            <Join />
        </div>
    )
}

export default Main;

