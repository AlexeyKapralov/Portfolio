import IconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "130"} height={props.height || "130"} viewBox={props.viewBox || "0 0 130 130"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${IconsSprite}#${props.iconId}` } />
        </svg>
    )
}