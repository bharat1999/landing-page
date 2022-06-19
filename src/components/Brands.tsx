
import './Brands.scss'
import Apple from '../assets/img/icons/Apple.png'
import Nike from '../assets/img/icons/Nike.png'
import Samsung from '../assets/img/icons/Samsung.png'
import Adidas from '../assets/img/icons/Adidas.png'
import Google from '../assets/img/icons/Google.png'
import Amazon from '../assets/img/icons/Amazon.png'


function Brands()
{
    return (
        <div className='BrandBox'>
            <img className='imgs apple' src={Apple} alt="Apple" />
            <img className='imgs nike' src={Nike} alt="Nike" />
            <img className='imgs samsung' src={Samsung} alt="Samsung" />
            <img className='imgs ' src={Google} alt="Google" />
            <img className='imgs' src={Adidas} alt="Adidas" />
            <img className='imgs amazon' src={Amazon} alt="Amazon" />
            
        </div>
    )
}

export default Brands