import './Button.scss'

interface button{
    text:string,
}

function Button({text}:button)
{
    return (
            <button className='button'>{text}</button>
    )
}

export default Button;