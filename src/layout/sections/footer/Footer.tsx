import styled from "styled-components"
import { Path1 } from "./path1/Path1"
import { Path2 } from "./path2/Path2"

export const Footer = () => {
    return (
        <StyledFooter>
            <Path1/>
            <Path2/>
        </StyledFooter>
    )
}

const StyledFooter = styled.section`
  display: flex;
  flex-direction: column;
  gap: 90px;
  padding-bottom: 70px;
`