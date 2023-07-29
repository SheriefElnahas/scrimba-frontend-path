import './Info.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

 

function Info(props) {

    return (
        <div className='info'>
            <img src={props.img} alt="eren yeager from attack on titan" />
            <h1 className='info-name'> {props.name} </h1>
            <p className='info-titan'>{props.titan}</p>
            <button className='info-btn'> <FontAwesomeIcon className='icon' icon={faEnvelope} />Email</button>
        </div>
    )
}


export default Info;