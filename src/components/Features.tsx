import './Features.scss'
import FeatureCard from './FeatureCard'
import I1 from '../assets/img/Features/Image-1.png'
import I2 from '../assets/img/Features/Image-2.png'
import I3 from '../assets/img/Features/Image-3.png'
import I4 from '../assets/img/Features/Image-4.png'

function FeatureBody()
{
    return (
        <div className='featureBody'>
            <FeatureCard url={I1} altName="Feature 1 Image"/>    
            <FeatureCard url={I2} altName="Feature 2 Image"/>    
            <FeatureCard url={I3} altName="Feature 3 Image"/>    
            <FeatureCard url={I4} altName="Feature 4 Image"/>    
        </div>
    )
}

export default FeatureBody