import "./Footer.scss";
import { useLocation } from "react-router-dom";

import footerMenu from '../../images/footerMenu.png'
import footerSearch from '../../images/footerSearch.png'

const Footer = (props) => {
    let location = useLocation();
    function handleClick(e) {
        console.log(location);
        document.getElementById("searchInput").focus()
    }
    return (
        <footer>
            <a href="#home">
                <img src={footerMenu} alt="Menu Button" />
            </a>
            
            <img src={footerSearch} alt="Search Button" onClick={handleClick}/>
            
        </footer>
    );
};

export default Footer;

