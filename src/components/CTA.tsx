import './CTA.scss'

interface CTA{
    text:string,
}

function CTA({text}:CTA)
{
    return (
        <div className='CtaBody'>
            <p className='CtaText'>{text}</p>
        </div>
    )
}

export default CTA;