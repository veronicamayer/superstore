import filterMenueImg from "../../images/filterMenu.png"
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <input type="text" />
            <Link to={"/filter"}>
                <img src="" alt="" /><img src={filterMenueImg} alt="" />
            </Link>
            
        </>
        
     );
}
 
export default Header;