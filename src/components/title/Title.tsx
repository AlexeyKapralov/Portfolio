import styled from "styled-components";
import {Theme} from "../../styles/Theme";

type TitlePropsType = {
    firstTilte: string
    secondTilte: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            <FirstTilte>{props.firstTilte}</FirstTilte>
            <SecondTilte>{props.secondTilte}</SecondTilte>
        </StyledTitle>
    )
}

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 140px;
  color: ${Theme.colors.primary}
`

const FirstTilte = styled.div`
  font-weight: bold;
  font-size: 48px;
`

const SecondTilte = styled.div`
  font-size: 32px;
  color: ${Theme.colors.secondary};
`