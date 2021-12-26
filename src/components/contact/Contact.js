import contact from './contact400-600.jpg';
import { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
import { Fade } from 'react-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { postFormEmail, portfolioFormStatus } from '../portfolio/portfolioSlice';

import './Contact.scss';
import Spinner from '../spiner/Spiner';
import ErrorMessage from '../error-message/Error';
import SuccessMessage from '../success-message/SuccessMessage';

const Contact = () => {
    const {formStatus} = useSelector(state => state.portfolio);
    const dispatch = useDispatch();
    const form = useRef();
    const checkRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [check, setCheck] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        dispatch(postFormEmail(form.current));

        setName('');
        setEmail('');
        setMessage('');
        setCheck(false);
    };

    if(formStatus === 'idle'){
        setTimeout(() => {dispatch(portfolioFormStatus(''))}, 3000);
    }

    if(formStatus === 'error'){
        setTimeout(() => {dispatch(portfolioFormStatus(''))}, 3000);
    } 

    return(
        <>
            <Fade cascade duration={3000}>
                <section className="contact" id="contact-href">

                    {formStatus === 'loading' ? <Spinner/> : null}
                    {formStatus === 'idle' ? <SuccessMessage/> : null}
                    {formStatus === 'error' ? <ErrorMessage/> : null}

                    <div className="container">
                        <div className="contact__wrapper">
                            <div className="contact__photo">
                                <img src={contact} alt="contact"/>
                            </div>
                            <div className="contact__descr">
                                <h2 className="title  title__fz16 about__title lang-cont">Contacts</h2>
                                <div className="title  title__fz36 lang-call">Contact me</div>
                                <div className="divider divider__contact"></div>
                                <div className="title title__fz14 contact__title lang-like">In any way convenient for you:</div>
                                <div className="contact__social">
                                    <a href="https://github.com/YevheniiIvanov" target="_blank" rel="noopener noreferrer">
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z" fill="#212121"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/Yevhenii__Ivanov/" target="_blank" rel="noopener noreferrer">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7495 0L6.24951 0C2.79826 0 -0.000488281 2.79875 -0.000488281 6.25L-0.000488281 13.75C-0.000488281 17.2013 2.79826 20 6.24951 20L13.7495 20C17.2008 20 19.9995 17.2013 19.9995 13.75L19.9995 6.25C19.9995 2.79875 17.2008 0 13.7495 0ZM18.1245 13.75C18.1245 16.1625 16.162 18.125 13.7495 18.125L6.24951 18.125C3.83701 18.125 1.87451 16.1625 1.87451 13.75L1.87451 6.25C1.87451 3.8375 3.83701 1.875 6.24951 1.875L13.7495 1.875C16.162 1.875 18.1245 3.8375 18.1245 6.25L18.1245 13.75Z" fill="black"/>
                                            <path d="M9.99951 5C7.23826 5 4.99951 7.23875 4.99951 10C4.99951 12.7613 7.23826 15 9.99951 15C12.7608 15 14.9995 12.7613 14.9995 10C14.9995 7.23875 12.7608 5 9.99951 5ZM9.99951 13.125C8.27701 13.125 6.87451 11.7225 6.87451 10C6.87451 8.27625 8.27701 6.875 9.99951 6.875C11.722 6.875 13.1245 8.27625 13.1245 10C13.1245 11.7225 11.722 13.125 9.99951 13.125Z" fill="black"/>
                                            <path d="M15.3745 5.29123C15.7425 5.29123 16.0408 4.99295 16.0408 4.62499C16.0408 4.25703 15.7425 3.95874 15.3745 3.95874C15.0065 3.95874 14.7083 4.25703 14.7083 4.62499C14.7083 4.99295 15.0065 5.29123 15.3745 5.29123Z" fill="black"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100012550484095" target="_blank" rel="noopener noreferrer">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0698 0L2.9292 0C1.3139 0 -0.000488281 1.31439 -0.000488281 2.92969L-0.000488281 17.0703C-0.000488281 18.6856 1.3139 20 2.9292 20L8.82764 20L8.82764 12.9297L6.48389 12.9297L6.48389 9.41406L8.82764 9.41406L8.82764 7.03125C8.82764 5.09262 10.4046 3.51563 12.3433 3.51563L15.8979 3.51563L15.8979 7.03125L12.3433 7.03125L12.3433 9.41406L15.8979 9.41406L15.312 12.9297L12.3433 12.9297L12.3433 20L17.0698 20C18.6851 20 19.9995 18.6856 19.9995 17.0703L19.9995 2.92969C19.9995 1.31439 18.6851 0 17.0698 0Z" fill="black"/>
                                        </svg>
                                    </a>
                                    <a href="tel:+48578265600">tel: (+48)578-265-600</a>
                                </div>
                                <div className="title title__fz14 contact__title lang-or">Or leave your message and I will contact you as soon as possible:</div>
                                <form ref={form} className="contact__form" onSubmit={sendEmail}>
                                    <div className="contact__input">
                                        <input required name="user_name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                        <label htmlFor="name" className="lang-innername">Your name</label>
                                    </div>
                                    <div className="contact__input">
                                        <input required name="user_email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <label htmlFor="email" className="lang-inneremail">Your email</label>
                                    </div>
                                    <div className="contact__textarea">
                                        <textarea name="user_message" id="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                                        <label htmlFor="text" className="lang-innermess">Your message</label>
                                    </div>
                                    <div className="contact__triger">
                                        <button className="contact__btn btn lang-btn" type='submit'>Sent a message</button>
                                        <div className="contact__policy">
                                            <input ref={checkRef} 
                                                required 
                                                type="checkbox"
                                                checked={check}
                                                onChange={() => setCheck(!check)}
                                            />
                                            <div className="lang-agre">I agree with the processing my personal data.</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>      
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default Contact;