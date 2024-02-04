import styled from "styled-components"

type ProjectPropsType = {
    imgSrc: string
    title: string
    text: string
    stack: Array<string>
    liveIcon: string
    liveLink: string
    gitIcon: string
    gitLink: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <ProjectBox>
            <Background src={props.imgSrc}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechStack>
            Tech Stack: 
                    {props.stack.map( (item, index) => {
                        return (
                            <span key="index"> {item}, </span>
                        )
                    } )
                    }
            </TechStack>
            <Links>
                <LivePreview> 
                    <Icon src={props.liveIcon} />
                    <Link><a href="#">{props.liveLink}</a></Link>    
                </LivePreview>
                <GitHub>
                    <Icon src={props.gitIcon}/>
                    <Link><a href="#">{props.gitLink}</a></Link> 
                </GitHub>
            </Links>
        </ProjectBox>
    )
}


const ProjectBox = styled.section`
    width: 375px
`

const Background = styled.img`

`

const Title = styled.div`

`

const Text = styled.div`

`
const TechStack = styled.div`

`
const Links = styled.div`

`
const LivePreview = styled.div`

` 
const Icon = styled.img`

`
const Link = styled.div`

`   
const GitHub = styled.div`

`