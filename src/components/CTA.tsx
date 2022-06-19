import './CTA.scss'

interface cta{
    text:string,
}

function CTA({text}:cta)
{
    return (
        <div className='CtaBody'>
            <p className='CtaText'>{text}</p>
        </div>
    )
}

export default CTA;