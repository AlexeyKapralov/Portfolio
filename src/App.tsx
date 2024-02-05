import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {MyStack} from './layout/sections/my-stack/MyStack';
import {MyProjects} from './layout/sections/my-projects/MyProjects';
import {ContactMe} from './layout/sections/contact-me/ContactMe';
import {Footer} from './layout/sections/footer/Footer';
import {Container} from "./layout/Container/Container";


function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <MyStack/>
            <MyProjects/>
            <ContactMe/>
            <Footer/>
        </Container>
    );
}

export default App;