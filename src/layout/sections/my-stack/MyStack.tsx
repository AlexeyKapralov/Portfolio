import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { Title } from "../../../components/title/Title"

export const MyStack = () => {
    return (
        <StyledMyStack>
            <Title firstTilte="My Tech Stack" secondTilte="Technologies I’ve been working with recently"/>
            <IconsBox>
                <Icon iconId="html" height="120" width="120"/>
                <Icon iconId="css" height="120" width="120"/>
                <Icon iconId="js" height="120" width="120"/>
                <Icon iconId="react" width="113" height="101" />
                <Icon iconId="vector" height="100" width="105"/>
                <Icon iconId="bootstrap" width="88" height="87"/>
                <Icon iconId="tailwind" width="131" height="131"/>
                <Icon iconId="sass" width="117" height="87"/>
                <Icon iconId="git" width="105" height="105"/>
                <Icon iconId="greensock" width="120" height="120"/>
                <Icon iconId="vscode" width="112" height="112"/>
                <Icon iconId="github" width="88" height="88"/>
            </IconsBox>
        </StyledMyStack>
    )
}

const IconsBox = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
`

const StyledMyStack = styled.section`
background-color: lightblue

`