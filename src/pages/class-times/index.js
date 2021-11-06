import {MainTitle, RegularText, SubTitle} from "../../common/commonText";
import styled from 'styled-components';
import * as constants from "../../common/constants"; 
import timetable from "../../assets/class-assets/timetable.png"
import links from "../../utils/links";
import {Link} from "react-router-dom";


const Timetable = constants.Timetable
const Page = constants.Card

const TimeTable = () => {
    return (
        <Page>
            <MainTitle>Class Times</MainTitle>
            <a href={timetable}>
                <Timetable src={timetable} />
            </a> 
        </Page>

    );
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
            <MainTitle>
                {/* <a href={links.freeClasses}>Join Now</a> */}
                <Link to={links.freeClasses}>Join Now</Link>
            </MainTitle>
        </EndQuote>
    )
}


const ClassTimes = () => {
    return (
        <div>
            <TimeTable />
            <JoinNow />
        </div>
    );
}

export default ClassTimes;