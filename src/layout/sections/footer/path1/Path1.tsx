import styled from "styled-components"
import logo_img from "../../../../assets/images/logo_gray.svg"
import { Logo } from "../../../../components/logo/Logo"
import { Menu } from "../../../../components/menu/Menu"
import { IconContacts } from "../../../../components/icon-contacts/IconContacts"

export const Path1 = () => {
    return (
        <StyledPath1>
            <Logo logo_img={logo_img}/>
            <Wrapper>
                <Menu MenuItems={["+91 12345 09876", "info@example.com"]} type="text"/>
                <IconContacts />
            </Wrapper>
        </StyledPath1>
    )
}

const StyledPath1 = styled.div`
    display:flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    display: flex

`
