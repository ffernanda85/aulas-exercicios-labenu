import iconBack from '../../assets/icons/leftArrow.svg'
import iconHome from '../../assets/icons/rocket.svg'
import * as s from './styledHeader'

export const Header = () => {
    return (
        <s.HeaderContainer>
            <s.ImgBack src={iconBack} alt="icon" />
            <s.Title>Lab Rick</s.Title>
            <s.ImgBack src={iconHome} alt="icon" />
        </s.HeaderContainer>
    )
}