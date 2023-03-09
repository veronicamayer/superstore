import "./Footer.scss";

import footerMenu from '../../images/footerMenu.png'
import footerSearch from '../../images/footerSearch.png'

const Footer = () => {
    return (
        <footer>
            <a href="">
                <img src={footerMenu} alt="Menu Button" />
            </a>
            <a href="">
                <img src={footerSearch} alt="Search Button" />
            </a>
        </footer>
    );
};

export default Footer;

