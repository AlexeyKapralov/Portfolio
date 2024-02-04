import styled from "styled-components"
import { Menu } from "../../../../components/menu/Menu"

export const Path2 = () => {
    return (
        <StyledPath2>
            <Menu MenuItems={["Home", "About", "Technologies", "Projects", "Contact"]} type="link"/>
            <Text>Designed and built by Pavan MG with Love & Coffee</Text>
        </StyledPath2>
    )
}

const StyledPath2 = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Text = styled.div`

`