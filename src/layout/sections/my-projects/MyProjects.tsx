import styled from "styled-components"
import { Title } from "../../../components/title/Title"
import { Project } from "./project/Project"
import image1 from "../../../../src/assets/images/projects_bg/rec_1.jpg"
import image2 from "../../../../src/assets/images/projects_bg/rec_2.jpg"
import image3 from "../../../../src/assets/images/projects_bg/rec_3.jpg"
import image4 from "../../../../src/assets/images/projects_bg/rec_4.jpg"
import image5 from "../../../../src/assets/images/projects_bg/rec_5.jpg"
import image6 from "../../../../src/assets/images/projects_bg/rec_6.jpg"
import icon1 from "../../../../src/assets/images/projects_icons/akar-icons_link-chain.svg"
import icon2 from "../../../../src/assets/images/projects_icons/akar-icons_github-fill.svg"

export const MyProjects = () => {
    return (
        <StyledMyProjects>
        <Title firstTilte="Projects" secondTilte="Things I’ve built so far"/>
        <ProjectBox>
            <Project 
                imgSrc={image1} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>

            <Project 
                imgSrc={image2} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>
                
            <Project 
                imgSrc={image3} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>

            <Project 
                imgSrc={image4} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>

            <Project 
                imgSrc={image5} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>
                
            <Project 
                imgSrc={image6} 
                stack={["HTML", "CSS", "React"]} 
                text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content" 
                title="Project Tile goes here"
                liveIcon={icon1}
                liveLink="Live Preview"
                gitIcon={icon2}
                gitLink="View Code"/>
                
        </ProjectBox>
        </StyledMyProjects>
    )
}

const StyledMyProjects = styled.section`
    
background-color: pink
`

const ProjectBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 33px;
`