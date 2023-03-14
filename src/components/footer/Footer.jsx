import "./Footer.scss";

import footerMenu from "../../images/footerMenu.png";
import footerSearch from "../../images/footerSearch.png";

import { useLocation, useNavigate } from "react-router-dom";

const Footer = (props) => {
    let location = useLocation();
    let navigate = useNavigate();

    function handleSearchClick(e) {
        if (location.pathname === "/home") {
            document.getElementById("searchInput").focus();
        } else {
            navigate("/home#searchInput");
            /* Todo: Workaround für fehlenden navigate Callback, Timeout notwendig damit zuerst navigate abgeschlossen wird bevor der focus gesetzt wird */
                setTimeout(() => {
                    document.getElementById("searchInput").focus();
                }, 100);
        }
    }

    function handleHomeClick(e) {
        if (location.pathname === "/home") {
            return;
        } else {
            navigate("/home");
        }
    }
        

    return (
        <footer>
            <a href="#home" onClick={handleHomeClick} >
                <img src={footerMenu} alt="Menu Button" />
            </a>

            <img src={footerSearch} alt="Search Button" onClick={handleSearchClick} />
        </footer>
    );
};

export default Footer;
