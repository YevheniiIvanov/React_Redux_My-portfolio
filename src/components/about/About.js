import { Fade, Zoom } from 'react-reveal';

import main_foto from './main_photo.jpg';

import './About.scss';

const About = () => {
    return(
        <>
            <Fade bottom>
                <section className="about" id="about-me">
                    <div className="about__container">
                        <div className="about__wrapper">
                            <Zoom left cascade duration={1000}>
                                <div className="about__photo">
                                    <img src={main_foto} alt="main_foto"/>
                                </div>
                            </Zoom>
                            <div className="about__descr">
                                <h2 className="title title__fz16 about__title lang-aboutme">About me</h2>
                                <div className="title title__fz36 about__subtitle lang-name">My name is Yevhenii Ivanov</div>
                                <p className="about__text lang-about-text">
                                    <Fade bottom duration={1500} distance='800px'>
                                        I am 34 years old. In 2004 I graduated from gymnasium and in 2013 I received the Bachelor's degree in Management. I started my career as a loader, then I worked as a merchandiser. In a short time, I became a sales representative and, for my achievements at work, I was promoted to the head of the sales team. Due to the current situation in Ukraine, I was forced to change the field of activity and think about moving to Poland. <br/><br/> 
                                    </Fade>
                                    <Fade bottom duration={1500} distance='800px'>
                                        In 2017 my family and I moved to Poland. Having thoroughly understood myself, my ambitions, perseverance and, probably, the most important thing - love to solve problems, I decided to become a Front-End developer. I have taken several courses in HTML5, CSS3, JavaScript, React, React + Redux on different learning platforms, the main one is UDEMY. Now I am actively developing and gaining new knowledge. <br/><br/>
                                    </Fade>
                                    <Fade bottom duration={1500} distance='800px'>
                                        Therefore, I can call myself a self-taught! To my mind, this is not good, but not bad either. It’s not good in the sense that I don’t have the required diploma that can confirm my knowledges. But as a leader that hired people, I, first of all, looked at the way they can overcome difficulties, at their desire to learn and their willingness to get this job. I am sure that you will see all those qualities in me and you will not regret it !!!
                                    </Fade>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            
        </>
    )
}

export default About;