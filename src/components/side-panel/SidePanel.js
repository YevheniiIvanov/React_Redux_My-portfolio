import { useSelector } from 'react-redux';

import './SidePanel.scss';

const SidePanel = () => {

    const { scrollWin } = useSelector(state => state.portfolio);

    const blackColor =  scrollWin > window.innerHeight -396 ? {color:'black'} : null; 
    const blackGround =  scrollWin > window.innerHeight -396 ? {background:'black'} : null;
    const blackFill = scrollWin > window.innerHeight -396 ? {fill:'black'} : null;

    return(
        <>
            <aside className="sidepanel">
                <a href="https://www.linkedin.com/in/yevhenii-ivanov-648276213" target="_blank" rel="noopener noreferrer" className="sidepanel__link">
                    <svg fill="white" style={blackFill} className='sidepanel__linkedin' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.instagram.com/Yevhenii__Ivanov/" target="_blank" rel="noopener noreferrer" className="sidepanel__link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z" fill="white"style={blackFill}/>
                        <path d="M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z" fill="white" style={blackFill}/>
                        <path d="M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z" fill="white" style={blackFill}/>
                    </svg>
                </a>
                <a href="https://github.com/YevheniiIvanov" target="_blank" rel="noopener noreferrer" className="sidepanel__link">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-4.37114e-07 9.99951C-1.95608e-07 15.5245 4.36167 19.9995 9.74107 19.9995C14.0457 19.9995 17.6962 17.1345 18.9832 13.162C19.0749 12.662 18.7734 12.4787 18.5148 12.4787C18.2835 12.4787 17.6706 12.487 16.8585 12.4912C17.4459 15.2728 15.5517 15.8595 15.5517 15.8595C14.4274 16.3145 14.1267 16.972 14.1267 16.972C13.5228 17.8778 13.5352 16.902 13.5352 16.902C13.603 15.8978 14.5389 15.3703 14.5389 15.3703C16.0283 14.4787 15.5979 13.0295 15.3493 12.4578C14.719 12.3678 14.2903 12.1103 14.0466 11.8245C13.8029 14.0453 12.9652 16.3795 9.23304 16.3795C8.16988 16.3795 7.30085 15.992 6.61933 15.3503C6.37316 15.4628 5.3827 15.8003 4.04116 15.2628C4.04116 15.2628 3.78012 14.4253 5.03988 12.5128C4.82345 11.7128 4.71606 10.8628 4.7111 10.0128C4.71606 9.16284 4.82345 8.31285 5.03988 7.51284C3.78012 5.61285 4.04116 4.77535 4.04116 4.77535C5.3827 4.23785 6.37316 4.57534 6.61933 4.67535C7.30085 4.03785 8.16988 3.65035 9.23304 3.65035C12.9752 3.65035 13.7987 5.98784 14.0383 8.21284C14.3307 7.86284 14.928 7.53784 15.8408 7.53784C17.1444 7.53784 18.1918 7.55034 18.5082 7.55034C18.7635 7.55034 19.0683 7.37534 18.9708 6.86284C17.692 2.86201 14.0391 -0.000488895 9.74107 -0.000488707C4.36167 -0.000488472 -6.7851e-07 4.47701 -4.37114e-07 9.99951Z" fill="white" style={blackFill}/>
                    </svg>
                </a>
                <div className="sidepanel__divider" style={blackGround}></div>
                <div className="sidepanel__text"><span style={blackColor}>Social &nbsp; &nbsp;networks</span></div>
            </aside>
        </>
    )
}

export default SidePanel;