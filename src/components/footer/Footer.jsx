import "./Footer.scss";

import footerMenu from '../../images/footerMenu.png'
import footerSearch from '../../images/footerSearch.png'

const Footer = (props) => {
    function handleClick(e) {
            document.getElementById("searchInput").focus()
    }
    return (
        <footer>
            <a href="">
                <img src={footerMenu} alt="Menu Button" />
            </a>
            
            <img src={footerSearch} alt="Search Button" onClick={handleClick}/>
            
        </footer>
    );
};

export default Footer;

