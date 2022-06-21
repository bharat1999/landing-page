import './Headline.scss'
import HImage from '../assets/img/headline.png'
import Button from './Button'

function Headline() {
    return (
        <div className='headlineBody'>
            <img className='headlineImg' src={HImage} alt="" />
            <div className='headlineContent'>
                <p className='headlineTitle'>Headline</p>
                <p className='headlineSubtitle'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <Button text='Try free'/>
            </div>
        </div>
    )
}

export default Headline