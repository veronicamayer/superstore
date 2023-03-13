import filterMenueImg from "../../images/filterMenu.png"
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.scss"

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState("")



    function onChangeHandler(e) {
        
        setSearchTerm(e.target.value)
        if(e.target.value.length > 0) {
            fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
            .then(res => res.json())
            .then(products => {
                console.log(products.products)
                props.setProducts(products.products)
                props.setShowDetailslist(true)

            });
        }else {
            fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(products => {
                console.log(products.products)
                props.setProducts(products.products)
                props.setShowDetailslist(false)

            });
        }
    }

    return ( 
        <section id="header">
            <input id="searchInput" type="text" placeholder="search" value={searchTerm} onChange={onChangeHandler}/>
            <Link to={"/filter"} onClick={props.handleLinkClick}>
                <img src="" alt="" /><img src={filterMenueImg} alt="" />
            </Link>
        </section>
    );
}
 
export default Header;