import styled from "styled-components"
import {Theme} from "../../styles/Theme";



export const Menu = (props: {MenuItems: Array<string>; type: "link" | "text"}) => {
    

    return (
        <StyledMenu>
            <ul>
                {
                    props.MenuItems.map( (item, index) => {
                        
                        if (props.type === "link") {
                            return( 
                                <li>
                                    <a key={index} href="#">{item}</a>
                                    </li> 
                            )
                        } else {
                            return( 
                                <li key={index}>{item}</li> 
                            )
                        }
                    })
                }
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 50px
    }

    a, li {
      color: ${Theme.colors.secondary};
      font-family: "DM Sans", serif;
      font-size: 20px;
      a:hover{
        color: ${Theme.colors.primary};
      }
    }
`