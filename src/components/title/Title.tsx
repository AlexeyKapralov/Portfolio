import styled from "styled-components";

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
    align-items: center
`

const FirstTilte = styled.div`
    
`

const SecondTilte = styled.div`
    
`