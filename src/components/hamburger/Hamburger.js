import Menu from '../menu/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { portfolioHamburger } from '../portfolio/portfolioSlice';

import './Hamburger.scss';

const Hamburger = () => {

    const { hamburger, scrollWin } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const blackColor =  scrollWin > window.innerHeight -30 ? {background:'black'} : null;

    return(
        <>
            {hamburger === true ? <Menu/> : null}
            <div className="hamburger" onClick={() => dispatch(portfolioHamburger(true))}>
                <span style={blackColor}></span>
                <span style={blackColor}></span>
                <span style={blackColor}></span>
                
            </div>
            
        </>
    )
}

export default Hamburger;