import { Zoom } from 'react-reveal';

import './Promo.scss';

const Promo = () => {
    
    return(
        <>
            <section className="promo" id="up">
                <div className="container">
                    <div className="promo__wrapper">
                        <div className="title title__fz24 promo__subtitle lang-myname">
                            <Zoom left cascade>
                                My name is Yevhenii Ivanov
                            </Zoom>
                        </div>
                        <h1 className="title title__fz60 promo__title lang-developer">
                            <Zoom left cascade>
                                I am Front-End
                            </Zoom>
                            <br/>
                            <Zoom left cascade>
                                Developer
                            </Zoom>
                            <br/>
                            <Zoom left cascade>
                                from Chenstohowa
                            </Zoom>
                        </h1>
                        <div className="promo__btn">
                            <a href="#portfolio-href" className="promo__link btn lang-portfolio">Portfolio</a>
                            <a href="#about-me" className="promo__link lang-about">About me</a>
                        </div>
                    </div>
                </div>
            </section>           
        </>
    )
}

export default Promo;