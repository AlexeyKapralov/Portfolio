import styled from "styled-components"



export const Menu = (props: {MenuItems: Array<string>; type: "link" | "text"}) => {
    

    return (
        <StyledMenu>
            <ul>
                {
                    props.MenuItems.map( (item, index) => {
                        
                        if (props.type === "link") {
                            return( 
                                <li>
                                    <a key={index} href="">{item}</a>
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
        gap: 30px
    }
`