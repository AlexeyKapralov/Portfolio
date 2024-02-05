import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const IconContacts = () => {
    return (
        <StyledIconContacts>
            <Icon iconId="github_icon" height="30px" viewBox="0 0 30px 30px" width="30px"/>
            <Icon iconId="twitter" height="30px" viewBox="0 0 30px 30px" width="30px"/>
            <Icon iconId="linked" height="30px" viewBox="0 0 30px 30px" width="30px"/>
        </StyledIconContacts>
    )
}

const StyledIconContacts = styled.section`
    display:flex;
    gap:20px
`
