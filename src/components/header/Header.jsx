import filterMenueImg from "../../images/filterMenu.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=10')
        .then(res => res.json())
        .then(products => {
            console.log(products.products)
            props.setProducts(products.products)
        });
    },[])

    function onChangeHandler(e) {
        setSearchTerm(e.target.value)
        if(e.target.value.length > 0) {
            fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
            .then(res => res.json())
            .then(products => {
                console.log(products.products)
                props.setProducts(products.products)
            });
        }else {
            fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(products => {
                console.log(products.products)
                props.setProducts(products.products)
            });
        }
    }

    return ( 
        <>
            <input type="text" value={searchTerm} onChange={onChangeHandler}/>
            <Link to={"/filter"}>
                <img src="" alt="" /><img src={filterMenueImg} alt="" />
            </Link>
            
        </>
        
     );
}
 
export default Header;