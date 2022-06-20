import './Clients.scss'
import ClientCard  from './ClientCard'

import C1 from '../assets/img/Clients/C1.png'
import C2 from '../assets/img/Clients/C2.png'
import C3 from '../assets/img/Clients/C3.png'

const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
const name = "Full Name"

function Clients() {
    return (
        <div className='clients'>
            <p className='clientsTitle'>Clients</p>
            <div className='clientsList'>
                <ClientCard comment={comment} url={C1} name={name}/>
                <ClientCard comment={comment} url={C2} name={name}/>
                <ClientCard comment={comment} url={C3} name={name}/>
            </div>
        </div>
    )
}

export default Clients