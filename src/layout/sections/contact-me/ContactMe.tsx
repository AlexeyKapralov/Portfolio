import styled from "styled-components"

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
    flex-direction: column;
    justify-contact: center;
    align-items: center;
    background-color: orange
`

const Text = styled.h2`

`

const Contact = styled.h2`

`