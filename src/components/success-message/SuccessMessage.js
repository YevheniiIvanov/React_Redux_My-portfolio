import './SuccessMessage.scss';
import checked from './checked.png';

const SuccessMessage = () => {
    return(
        <div className="modal">
            <div className="modal__bg">
                <div className="modal__mini title title__fz20">Thank you <br/> I'll contact you soon.
                    <div className='modal__img'>
                        <img src={checked}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SuccessMessage;