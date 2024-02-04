import React from "react"
import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Icon } from "../../components/icon/Icon"
import { Main } from "../sections/main/Main"
import logo_img from "../../../src/assets/images/logo 1.svg"

const MenuArr = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
    return( 
    
        <StyledHeader>
            <Logo logo_img={logo_img}/>
            <Menu MenuItems={MenuArr} type="link"/>  
        </StyledHeader>
    )
}



const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-around
`