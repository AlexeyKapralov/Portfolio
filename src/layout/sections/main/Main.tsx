import styled from "styled-components"
import main_image from "../../../../src/assets/images/photo.png"
import bgImage from "../../../../src/assets/images/bg_for_main.png"
import {Theme} from "../../../styles/Theme";
import { Container } from "../../Container/Container";
import { font } from "../../../styles/Common";

type ImagePropsType = {
    src: string
    alt: string
    h?: string
    w?: string
}

export const Main = () => {
    return (
      <ContNew>
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
      </ContNew>
    )
}

const ContNew = styled(Container)`
  max-width : 1343px;
`


const StyledMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`

const Text = styled.div`
  width: 100%;
  ${font({family:"'Poppins', serif", Fmax:58, Fmin:34, weight: 700, lineHeight: 70})};
  z-index: 1;
  span {
    background: ${Theme.colors.accentColor};
    background-clip: text;
    /* -webkit-background-clip: text; */
    -webkit-text-fill-color: transparent;
  }
`
const ImageWrap = styled.div`
  height: 628px;  
  z-index: 0;
  background:  no-repeat url(${bgImage}) 50% 50%;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
`

const Image = styled.img<ImagePropsType>`

`
