
import './Header.scss'
import headerImage from '../assets/img/headerImage.png'
import CTA from './CTA'

function Header() {
    return  (
        <div className='header'>
            <div className='header-content'>
                <p className='header-title'>Start to workout</p>    
                <p className='header-text'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <CTA text='Get Started'/>
            </div>    
            <div className='header-image'>
                <img src={headerImage} alt="headerImage" />
            </div>
        </div>
    )
}

export default Header;