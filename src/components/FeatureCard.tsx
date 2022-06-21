import './FeatureCard.scss'

interface featureCard {
    url:string,
    altName:string,
}

function FeatureCard({url,altName}:featureCard) {
    return (
        <div className='feature'>
            <img className='featureImage' src={url} alt={altName} />
            <p className='featureTitle'>Feature</p>
            <p className='featureSubtitle'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className='featureLink'>
            <p>Read More</p>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.019 2.16868C10.7364 1.886 10.7364 1.42768 11.019 1.145C11.3017 0.862313 11.76 0.862313 12.0427 1.145L16.3859 5.48813C16.6685 5.77081 16.6685 6.22913 16.3859 6.51181L12.0427 10.8549C11.76 11.1376 11.3017 11.1376 11.019 10.8549C10.7364 10.5723 10.7364 10.1139 11.019 9.83126L14.1265 6.72382H1.40472C1.00054 6.72382 0.672882 6.39973 0.672882 5.99996C0.672882 5.60019 1.00054 5.2761 1.40472 5.2761H14.1265L11.019 2.16868Z" fill="#FF6250"/>
            </svg>
            </div>
        </div>
    )
}

export default FeatureCard