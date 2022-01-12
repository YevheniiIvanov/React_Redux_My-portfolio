import { lazy, Suspense } from 'react';
import { portfolioScroll } from '../portfolio/portfolioSlice';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import Spiner from '../spiner/Spiner';

import PageUp from '../page-up/PageUp';
// import Promo from '../promo/Promo';
// import Hamburger from '../hamburger/Hamburger';
// import About from '../about/About';
// import Skills from '../skills/Skills';
// import Portfolio from '../portfolio/Portfolio';
// import Contact from '../contact/Contact';
// import SidePanel from '../side-panel/SidePanel';

// const PageUp = lazy(() => import('../page-up/PageUp'));
const Promo = lazy(() => import('../promo/Promo'));
const Hamburger = lazy(() => import('../hamburger/Hamburger'));
const About = lazy(() => import('../about/About'));
const Skills = lazy(() => import('../skills/Skills'));
const Portfolio = lazy(() => import('../portfolio/Portfolio'));
const Contact = lazy(() => import('../contact/Contact'));
const SidePanel = lazy(() => import('../side-panel/SidePanel'));

function App() {
  const {scrollWin} = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => dispatch(portfolioScroll(window.scrollY)));

  return (
    <div className="App">
      
      <Suspense fallback={<Spiner/>}>
        {scrollWin >= window.innerHeight ? <PageUp/> : null}
        <SidePanel/>
        <Hamburger/>
        <Promo/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </Suspense>
    </div>
  );
}

export default App;
