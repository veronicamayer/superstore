import FilterItem from "../../components/filterItem/FilterItem";
import zurückButton from "../../images/zurückButton.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Filter.scss";

const Filter = () => {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section id="filter">
            <div>
                <Link to="/">
                    <img src={zurückButton} alt="zurückButton.png" />
                </Link>
                <h2>Filters</h2>
            </div>
            <article>
                <h3>Categories</h3>
                <div id="categories">
                    {categories &&
                        categories.map((category) => {
                            return <FilterItem category={category} />
                        })}
                </div>
            </article>
            <article>
                <h3>Price</h3>
                <div>
                    <input type="number" placeholder="0" name="" id="" step={"any"} /> $
                    <span> - </span>
                    <input type="number" placeholder="100" name="" id="" step={"any"} /> $
                </div>
            </article>
            <article>
                <h3>Brands</h3>
                <div></div>
            </article>
        </section>
    );
};

export default Filter;
