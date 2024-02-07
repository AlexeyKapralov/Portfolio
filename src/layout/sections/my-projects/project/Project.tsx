import styled from "styled-components"
import {Theme} from "../../../../styles/Theme";

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
            <ProjectWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStack>
                    <span>Tech Stack:</span>
                    {props.stack.map((item, index) => {
                        return (
                            <span key="index"> {item}, </span>
                        )
                    })
                    }
                </TechStack>
                <Links>
                    <LinkWrap>
                        <Icon src={props.liveIcon}/>
                        <Link><a href="#">{props.liveLink}</a></Link>
                    </LinkWrap>
                    <LinkWrap>
                        <Icon src={props.gitIcon}/>
                        <Link><a href="#">{props.gitLink}</a></Link>
                    </LinkWrap>
                </Links>
            </ProjectWrapper>
        </ProjectBox>
    )
}


const ProjectBox = styled.section`
  width: 375px;
  border-radius: 20px;
  background-color: ${Theme.colors.secondarbg};
`

const ProjectWrapper = styled.div`
  padding: 30px;
`

const Background = styled.img`
  border-radius: 20px 20px 0 0;
`

const Title = styled.div`
  color: ${Theme.colors.primary};
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 12px;
`

const Text = styled.div`
  color: ${Theme.colors.secondary};
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  text-align: left;
  margin-bottom: 12px;
`
const TechStack = styled.div`
  color: ${Theme.colors.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0px;
  margin-bottom: 20px;

  span:first-child {
    color: ${Theme.colors.primary};
  }
`
const Links = styled.div`
  display: flex;
  justify-content: space-between;
`
const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
`
const Icon = styled.img`
`
const Link = styled.div`
  a {
    color: ${Theme.colors.primary};
    font-size: 16px;

    &:hover {
      text-decoration-line: underline;
    }
  }
`