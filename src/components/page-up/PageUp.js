import pageUp from './up.svg';
import './PageUp.scss';
import { Fade } from 'react-reveal';

const PageUp = () => {
    
    return(
        <>
            <a href="#up" class="pageup">
                <Fade cascade duration={3000}>
                    <img src={pageUp} alt="up"/>
                </Fade>
            </a>
        </>
    )
}

export default PageUp;