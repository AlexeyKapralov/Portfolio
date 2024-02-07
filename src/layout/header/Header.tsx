import React from "react"
import styled from "styled-components"
import {Logo} from "../../components/logo/Logo"
import {Menu} from "../../components/menu/Menu"
import logo_img from "../../../src/assets/images/logo 1.svg"
import {IconContacts} from "../../components/icon-contacts/IconContacts";
import {Theme} from "../../styles/Theme";

const MenuArr = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerHeader>
                <Logo logo_img={logo_img}/>
                <MenuItemsWrapper>
                    <Menu MenuItems={MenuArr} type="link"/>
                    <IconContacts/>
                </MenuItemsWrapper>
            </ContainerHeader>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
  background-color: ${Theme.colors.primarybg};
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
`

const ContainerHeader = styled.div`
  max-width: 1223px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 40px 15px;
  align-items: center;
`

const MenuItemsWrapper = styled.div`
  display: flex;
  gap: 50px;
`