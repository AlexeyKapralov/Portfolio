import styled from "styled-components"
import {Menu} from "../../../../components/menu/Menu"
import {Theme} from "../../../../styles/Theme";

export const Path2 = () => {
    return (
        <StyledPath2>
            <Menu MenuItems={["Home", "About", "Technologies", "Projects", "Contact"]} type="link"/>
            <Text>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></Text>
        </StyledPath2>
    )
}

const StyledPath2 = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.div`
  word-wrap: unset;
  color: ${Theme.colors.secondary};
  font-size: 18px;
  line-height: 26px;
  span {
    background: ${Theme.colors.accentColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`