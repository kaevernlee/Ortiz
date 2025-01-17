import styled from 'styled-components';
import links from '../utils/links';
import {Link} from "./commonText";

const FooterWrapper = styled.div`
  background-color: #222;
  width: 100%;
  bottom: 0;
  color: white;
`;

const FooterInnerWrapper = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
`;
const Subtext = styled.p`
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
`;

const TextGroup = styled.div`
    margin: 30px 0;
`;

const FooterGroup = styled.div`
    width:30%;
  @media only screen and (max-width: 700px) {
    width: 50%;
  }
`;

const FooterBottom = styled.div`
    background-color: #111;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterInnerWrapper>
                <FooterGroup>
                    <TextGroup>
                        <Title>ADDRESS</Title>
                        <Subtext>50/5 Ponderosa Parade</Subtext>
                        <Subtext>Warriewood NSW 2102</Subtext>
                    </TextGroup>
                    <TextGroup>
                        <Title>CONTACT US</Title>
                        <Subtext>Mobile: 0410 707 002</Subtext>
                        <Subtext>Email: edson.ortiz@me.com</Subtext>
                    </TextGroup>
                </FooterGroup>
                <FooterGroup>
                    <TextGroup>
                        <Title>QUICK LINKS</Title>
                        <Link href={links.freeClasses}>Free martial arts class</Link>
                        <Link href={links.testimonials}>Testimonials</Link>
                        <Link href={links.faq}>Frequently Asked Questions</Link>
                        <Link href={links.contact}>Contact</Link>
                        <Link href={links.timeTable}>Class Times</Link>
                    </TextGroup>
                </FooterGroup>
            </FooterInnerWrapper>
            <FooterBottom>
                © Ortiz Martial Arts Academy • Since 2009
            </FooterBottom>

        </FooterWrapper>
    );
}

export default Footer;