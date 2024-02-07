import styled from "styled-components"
import main_image from "../../../../src/assets/images/photo.png"
import bgImage from "../../../../src/assets/images/bg_for_main.png"
import {Theme} from "../../../styles/Theme";

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
                <span>Pavan MG</span><br></br>
                I build things for web
            </Text>
            <ImageWrap>
                <Image src={main_image} alt="main image" width='349' height='349'/>
            </ImageWrap>
        </StyledMain>
    )
}

const StyledMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

`

const Text = styled.div`
  font-family: "Poppins", serif;
  font-weight: 700;
  line-height: 70px;
  font-size: 58px;
  color: ${Theme.colors.primary};
  z-index: 1;
  span {
    background: ${Theme.colors.accentColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const ImageWrap = styled.div`
  position: relative;
  z-index: 0;
  &::before{
    content: "";
    display: inline-block;
    width: 628px;
    height: 628px;
    background: url("${bgImage}");
    position: absolute;
    transform: translate(-20%, -20%);
    z-index: -1;
    
  }
`

const Image = styled.img<ImagePropsType>`
    z-index: 0;
`
