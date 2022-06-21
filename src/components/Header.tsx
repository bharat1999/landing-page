
import './Header.scss'
import headerImage from '../assets/img/headerImage.png'
import Button from './Button'

function Header() {
    return  (
        <div className='header'>
            <div className='headerContent'>
                <p className='headerTitle'>Start to workout</p>    
                <p className='headerSubtitle'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <Button text='Get started'/>
            </div>    
            <div className='header-image'>
                <img src={headerImage} alt="headerImage" />
            </div>
        </div>
    )
}

export default Header;