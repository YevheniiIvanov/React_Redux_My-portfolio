import icons8visualstudio from './img/icons8-visual-studio.svg';
import html5 from './img/html5.svg';
import css3 from './img/css3.svg';
import bootstrap from './img/icons8-bootstrap.svg';
import js from './img/js.svg';
import react from './img/react.svg';
import redux from './img/icons8-redux-96.png';
import git from './img/icons8-git.svg';
import github from './img/icons8-github.svg';
import webpack from './img/icons8-webpack.svg';
import gulp from './img/icons8-gulp.svg';

import { Fade } from 'react-reveal';

import './Skills.scss';


const Skills = () => {
    return(
        <>
            <Fade bottom>
                <section className="skills" id="sills-href">
                    <div className="skills__container">
                        <h2 className="title title__fz16 skills__skills lang-skills">Skills</h2>
                        <div className="title title__fz36 skills__subtitle lang-use">What do I use in my work</div>

                        <div className="skills__wrapper">
                            <div className="skills__item">
                                <img src={icons8visualstudio} alt="icons8-visual-studio" className="skills__img"/>
                                <div className="skills__title">Visual Studio Code</div>
                                <p className="lang-visual">Lightweight code editor for cross-platform web and cloud application development.</p>
                            </div>
                            <div className="skills__item">
                                <img src={html5} alt="html5" className="skills__img"/>
                                <div className="skills__title">HTML5</div>
                                <p className="lang-html">It creates the skeleton of your site or application, and the fifth version will allow you to create a more SEO-optimized structure of your product.</p>
                            </div>
                            <div className="skills__item">
                                <img src={css3} alt="css3" className="skills__img"/>
                                <div className="skills__title">CSS3</div>
                                <p className="lang-css">This style language allows you to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!</p>
                            </div>
                            <div className="skills__item">
                                <img src={bootstrap} alt="bootstrap" className="skills__img"/>
                                <div className="skills__title">Bootstrap</div>
                                <p className="lang-jquery">Open-source CSS  and JavaScript framework directed at responsive, mobile-first front-end web development and interface components.</p>
                            </div>
                            <div className="skills__item">
                                <img src={js} alt="js" className="skills__img"/>
                                <div className="skills__title">Java Script</div>
                                <p className="lang-js">This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.</p>
                            </div>
                            <div className="skills__item">
                                <img src={react} alt="react" className="skills__img"/>
                                <div className="skills__title">React</div>
                                <p className="lang-window">JavaScript library for creating user interfaces. Developed by Facebook, Instagram and the community of individual developers.</p>
                            </div>
                            <div className="skills__item">
                                <img src={redux} alt="redux" className="skills__img"/>
                                <div className="skills__title">Redux</div>
                                <p className="lang-redux">JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</p>
                            </div>
                            <div className="skills__item">
                                <img src={git} alt="git" className="skills__img"/>
                                <div className="skills__title">GIT</div>
                                <p className="lang-git">Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>
                            </div>
                            <div className="skills__item">
                                <img src={github} alt="github" className="skills__img"/>
                                <div className="skills__title">GitHub</div>
                                <p className="lang-github">Web service for hosting IT projects and their joint development.</p>
                            </div>
                            <div className="skills__item">
                                <img src={webpack} alt="webpack" className="skills__img"/>
                                <div className="skills__title">Webpack</div>
                                <p className="lang-webpack">It is a module wrapper for modern JavaScript, HTML, CSS applications.</p>
                            </div>
                            <div className="skills__item">
                                <img src={gulp} alt="gulp" className="skills__img"/>
                                <div className="skills__title">Gulp</div>
                                <p className="lang-gulp">A task manager for the automatic execution of tasks, written in the JavaScript programming language.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default Skills;