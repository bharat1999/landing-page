import './Feature.scss'

interface feature {
    url:string,
    altName:string,
}

function Feature({url,altName}:feature) {
    return (
        <div className='feature'>
            <img className='featureImage' src={url} alt={altName} />
            <p className='featureHeading'>Feature</p>
            <p className='featureText'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <p className='featureLink'>Read More →</p>
        </div>
    )
}

export default Feature