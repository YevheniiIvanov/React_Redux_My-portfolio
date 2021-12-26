import marvel from './img/Marvel.png';
import employee from './img/employee.png';
import coffee from './img/coffee.jpg';
import pulse from './img/pulse.png';
import food from './img/food.png';
import hero from './img/Hero-panel.jpg';

import { Fade } from 'react-reveal';

import './Portfolio.scss';

const Portfolio = () => {
    return(
        <>
            <section className="portfolio" id="portfolio-href">
                <div className="container">
                    <h2 className="title title__fz16 portfolio__title lang-portfolio-work">Portfolio</h2>
                    <div className="title title__fz36 portfolio__subtitle lang-my-work">My works</div>
                    <div className="portfolio__wrapper">
                        <Fade left duration={1500}>
                            <a href="http://marvel.yevheniiivanov.com/" target="_blank" rel="noopener noreferrer" className="portfolio__work marvel">
                                <img src={marvel} alt="marvel"/>
                            </a>
                        </Fade>  

                        <Fade left duration={1500}>
                            <a href="http://employee-accounting-react.yevheniiivanov.com/" target="_blank" rel="noopener noreferrer" className="portfolio__work employee">
                                <img src={employee} alt="marvel"/>
                            </a>
                        </Fade>
                        
                        <Fade left duration={1500}>
                            <a href="http://coffee.yevheniiivanov.com/" target="_blank" rel="noopener noreferrer" className="portfolio__work coffee">
                                <img src={coffee} alt="coffee"/>
                            </a>
                        </Fade>
                        
                        <Fade left duration={1500}>
                            <a href="http://pulse.yevheniiivanov.com" target="_blank" rel="noopener noreferrer" className="portfolio__work pulse">
                                <img src={pulse} alt="pulse"/>
                            </a>
                        </Fade>
                        
                        <Fade left duration={1500}>
                            <a href="http://food.yevheniiivanov.com/" target="_blank" rel="noopener noreferrer" className="portfolio__work food" >
                                <img src={food} alt="food"/>
                            </a>
                        </Fade>
                        
                        <Fade left duration={1500}>
                            <a href="http://hero-panel.yevheniiivanov.com" target="_blank" rel="noopener noreferrer" className="portfolio__work hero">
                                <img src={hero} alt="hero-panel"/>
                            </a>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;