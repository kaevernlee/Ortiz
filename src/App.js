import './App.css';
import styled from 'styled-components';
import Header from './common/header';
import HomePage from './pages/home';
import FreeClassesPage from './pages/free-martial-arts-classes/index';
import TestimonialsPage from './pages/testimonials';
import FAQPage from './pages/faqs';
import ContactPage from './pages/contact';
import TimeTablePage from './pages/class-times';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from "./common/footer";
import links from './utils/links';

const Wrapper = styled.div`
  max-width: 2200px;
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0 0 18px rgb(0 0 0 / 40%);
`;

const Body = styled.body`
  background-color: #ccc;
  font-family: Oswald, sans-serif;
  @media only screen and (max-width: 700px) {
    position: relative;
  }
`;

const PageWrapper = styled.div`
  margin: 30px;
  height: 100%;
`;

function App() {
    return (
        <BrowserRouter>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;700&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            <Body>
                <Wrapper>
                    <Header/>
                    <PageWrapper>
                        <Switch>
                            <Route path={links.freeClasses}>
                                <FreeClassesPage/>
                            </Route>
                            <Route path={links.testimonials}>
                                <TestimonialsPage/>
                            </Route>
                            <Route path={links.faq}>
                                <FAQPage/>
                            </Route>
                            <Route path={links.contact}>
                                <ContactPage/>
                            </Route>
                            <Route path={links.timeTable}>
                                <TimeTablePage/>
                            </Route>
                            <Route path={links.home}>
                                <HomePage/>
                            </Route>
                        </Switch>
                    </PageWrapper>
                    <Footer/>
                </Wrapper>
            </Body>
        </BrowserRouter>
    );
}


export default App;
