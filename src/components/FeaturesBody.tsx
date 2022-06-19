import './FeatureBody.scss'
import Feature from './Feature'
import I1 from '../assets/img/Features/Image-1.png'
import I2 from '../assets/img/Features/Image-2.png'
import I3 from '../assets/img/Features/Image-3.png'
import I4 from '../assets/img/Features/Image-4.png'

function FeatureBody()
{
    return (
        <div className='featureBody'>
            <Feature url={I1} altName="Feature 1 Image"/>    
            <Feature url={I2} altName="Feature 2 Image"/>    
            <Feature url={I3} altName="Feature 3 Image"/>    
            <Feature url={I4} altName="Feature 4 Image"/>    
        </div>
    )
}

export default FeatureBody