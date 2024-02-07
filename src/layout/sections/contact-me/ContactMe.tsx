import styled from "styled-components"
import {Theme} from "../../../styles/Theme";

export const ContactMe = () => {
    return (
        <StyledContactMe>
            <Text>
                For any questions please mail me:
            </Text>
            <Contact>hi@pavanmg.in</Contact>
        </StyledContactMe>
    )
}

const StyledContactMe = styled.section`
  display: flex;
  gap: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.h2`
  color: ${Theme.colors.primary};
  font-family: "DM Sans", serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Contact = styled.h2`
  background: ${Theme.colors.accentColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  font-family: "DM Sans", serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`