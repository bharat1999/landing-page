
import './CTA.scss'
import IP from '../assets/img/iPhone 13.png'
import playStore from '../assets/img/googleLogo.png'
import appStore from '../assets/img/appleLogo.png'

function CTA() {
    return (
        <div className='ctaBody'>
            <div className='ctaContent'>
                <div className='ctaInfo'>
                    <p className='ctaInfoTitle'>Try new classes</p>
                    <p className='ctaInfoSubtitle'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                </div>
                <div className='CTA'>
                    <p>Learn More</p>
                    <div className='ctaBtn'>
                        <img src={playStore} alt="Play Store Icon" />
                        <img src={appStore} alt="App Store Icon" />
                    </div>
                </div>
            </div>
            <img className='ctaIphone' src={IP} alt="Iphone 13" />
        </div>
    )
}

export default CTA