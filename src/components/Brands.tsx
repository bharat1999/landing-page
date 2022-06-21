
import './Brands.scss'
import Divider from './Divider'
import LogosBig from '../assets/img/LogosBig.png'
import LogosSmall from '../assets/img/LogosSmall.png'

function Brands()
{
    return (
        <div className='brandBox'>
            <Divider/>
            <div className='logos'>
                <img className='tablet' src={LogosBig} alt="Logos" />
                <img className='mobile' src={LogosSmall} alt="Logos" />
            </div>
            <Divider/>
        </div>
    )
}

export default Brands