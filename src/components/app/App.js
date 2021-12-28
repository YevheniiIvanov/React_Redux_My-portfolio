import Promo from '../promo/Promo';
import Hamburger from '../hamburger/Hamburger';
import SidePanel from '../side-panel/SidePanel';
import './App.scss';
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

import { portfolioScroll } from '../portfolio/portfolioSlice';
import { useDispatch, useSelector } from 'react-redux';
import PageUp from '../page-up/PageUp';

function App() {
  const {scrollWin} = useSelector(state => state.portfolio);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => dispatch(portfolioScroll(window.scrollY)));

  return (
    <div className="App">
      {scrollWin >= window.innerHeight ? <PageUp/> : null}
      <SidePanel/>
      <Hamburger/>
      <Promo/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
