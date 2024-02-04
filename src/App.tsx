import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { MyStack } from './layout/sections/my-stack/MyStack';
import { MyProjects } from './layout/sections/my-projects/MyProjects';
import { ContactMe } from './layout/sections/contact-me/ContactMe';
import { Footer } from './layout/sections/footer/Footer';


function App() {
    return (
        <Wrapper>
            <Header/>      
            <Main/>
            <MyStack/>
            <MyProjects/>
            <ContactMe/>
            <Footer/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`

    max-width:  1193px;
    display: flex;
    flex-direction: column;
    margin: 0 auto
`