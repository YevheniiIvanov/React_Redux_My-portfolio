import './Error.scss';
import error from './error.gif';

const ErrorMessage = () => {
    return(
        <div className="modal">
            <div className="modal__bg">
                <div className="modal__mini title title__fz20">Something went wrong!!!
                    <div className='modal__img'>
                        <img src={error}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ErrorMessage;