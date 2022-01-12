import { useDispatch } from 'react-redux';
import { Fade } from 'react-reveal';
import { portfolioHamburger } from '../portfolio/portfolioSlice';

import './Menu.scss';

const Menu = (props) => {

    const dispatch = useDispatch();

    return(
        <div className="menu active">
            <div className="menu__block">
                <div className="menu__close" onClick={(e) => dispatch(portfolioHamburger(e.currentTarget))}>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183717 1.30861 -0.183717 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183717 26.55 -0.183717 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="#ffff"/>
                    </svg>
                </div>
                <nav>
                    <ul className="menu__list" onClick={(e) => dispatch(portfolioHamburger(e.currentTarget))}>
                        <li className="menu__link">
                            <a href="#about-me" className="lang-menu-about">
                                <Fade cascade>
                                    About me
                                </Fade>
                            </a>
                        </li>
                        <li className="menu__link">
                            <a href="#sills-href" className="lang-menu-exp">
                                <Fade cascade>
                                    My skills
                                </Fade>
                            </a>
                        </li>
                        <li className="menu__link">
                            <a href="#portfolio-href" className="lang-menu-portfolio">
                                <Fade cascade>
                                    My works
                                </Fade>
                            </a>
                        </li>
                        <li className="menu__link">
                            <a href="#contact-href" className="lang-menu-contact">
                                <Fade cascade>
                                    Contacts
                                </Fade>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="menu__social">
                    <a href="https://github.com/YevheniiIvanov" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z" fill="#ffff"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/Yevhenii__Ivanov/" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7495 0L6.24951 0C2.79826 0 -0.000488281 2.79875 -0.000488281 6.25L-0.000488281 13.75C-0.000488281 17.2013 2.79826 20 6.24951 20L13.7495 20C17.2008 20 19.9995 17.2013 19.9995 13.75L19.9995 6.25C19.9995 2.79875 17.2008 0 13.7495 0ZM18.1245 13.75C18.1245 16.1625 16.162 18.125 13.7495 18.125L6.24951 18.125C3.83701 18.125 1.87451 16.1625 1.87451 13.75L1.87451 6.25C1.87451 3.8375 3.83701 1.875 6.24951 1.875L13.7495 1.875C16.162 1.875 18.1245 3.8375 18.1245 6.25L18.1245 13.75Z" fill="#ffff"/>
                            <path d="M9.99951 5C7.23826 5 4.99951 7.23875 4.99951 10C4.99951 12.7613 7.23826 15 9.99951 15C12.7608 15 14.9995 12.7613 14.9995 10C14.9995 7.23875 12.7608 5 9.99951 5ZM9.99951 13.125C8.27701 13.125 6.87451 11.7225 6.87451 10C6.87451 8.27625 8.27701 6.875 9.99951 6.875C11.722 6.875 13.1245 8.27625 13.1245 10C13.1245 11.7225 11.722 13.125 9.99951 13.125Z" fill="#ffff"/>
                            <path d="M15.3745 5.29123C15.7425 5.29123 16.0408 4.99295 16.0408 4.62499C16.0408 4.25703 15.7425 3.95874 15.3745 3.95874C15.0065 3.95874 14.7083 4.25703 14.7083 4.62499C14.7083 4.99295 15.0065 5.29123 15.3745 5.29123Z" fill="#ffff"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/yevhenii-ivanov-648276213" target="_blank" rel="noopener noreferrer">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            </div>
            <div className="menu__overlay" onClick={(e) => dispatch(portfolioHamburger(e.currentTarget))}></div>
        </div>
    )
}

export default Menu;