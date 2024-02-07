import styled from "styled-components"
import logo_img from "../../../../assets/images/logo_gray.svg"
import {Logo} from "../../../../components/logo/Logo"
import {Menu} from "../../../../components/menu/Menu"
import {IconContacts} from "../../../../components/icon-contacts/IconContacts"
import {Theme} from "../../../../styles/Theme";

export const Path1 = () => {
    return (
        <StyledPath1>
            <Logo logo_img={logo_img}/>
            <Wrapper>
                <Menu MenuItems={["+91 12345 09876", "info@example.com"]} type="text"/>
                <IconContacts/>
            </Wrapper>
        </StyledPath1>
    )
}

const StyledPath1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::before{
    content: "";
    height: 2px;
    background-color: ${Theme.colors.dividerColor};
    opacity: 0.3;
    position: absolute;
    bottom: -42px;
    left: 0;
    right: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: 50px;

`
