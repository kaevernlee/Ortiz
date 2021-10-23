import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import styled from 'styled-components';
import * as constants from "../../common/constants"; 
import timetable from "../../assets/class-assets/timetable.png"

const Timetable = constants.Timetable
const Page = constants.Card

const ClassTimes = () => {
    return (
        <Page>
            <MainTitle>Class Times</MainTitle>
            <a href={timetable}>
                <Timetable src={timetable} />
            </a> 
        </Page>

    );
}

export default ClassTimes;