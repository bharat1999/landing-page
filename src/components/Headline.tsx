import './Headline.scss'
import HImage from '../assets/img/headline.png'
import CTA from './CTA'

function Headline() {
    return (
        <div className='headlineBody'>
            <img className='headlineImg' src={HImage} alt="" />
            <div className='headlineContent'>
                <p className='headlineHeading'>Headline</p>
                <p className='headlineText'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <CTA text='Try free'/>
            </div>
        </div>
    )
}

export default Headline