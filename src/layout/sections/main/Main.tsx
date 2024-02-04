import styled from "styled-components"
import main_image from "../../../../src/assets/images/photo.png"

type ImagePropsType = {
    src: string
    alt: string
    h?: string
    w?: string
}

export const Main = () => {
    return (
        <StyledMain>
            <Text>
                Hi 👋,<br></br>
                My name is<br></br>
                Pavan MG<br></br>
                I build things for web
            </Text>
            <Image src={main_image} alt="main image"  width='349' height='349'/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    background-color: yellow
`

const Text = styled.div`
`
const Image = styled.img<ImagePropsType>`
`