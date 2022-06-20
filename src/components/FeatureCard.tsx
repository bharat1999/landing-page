import './FeatureCard.scss'

interface featureCard {
    url:string,
    altName:string,
}

function FeatureCard({url,altName}:featureCard) {
    return (
        <div className='feature'>
            <img className='featureImage' src={url} alt={altName} />
            <p className='featureHeading'>Feature</p>
            <p className='featureText'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <p className='featureLink'>Read More →</p>
        </div>
    )
}

export default FeatureCard