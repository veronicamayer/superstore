import FilterItem from "../../components/filterItem/FilterItem";
import zurückButton from "../../images/zurückButton.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <section>
      <div>
        <Link to="/">
          <img src={zurückButton} alt="zurückButton.png" />
        </Link>
        <h2>Filters</h2>
      </div>
      <article>
        <h3>Categories</h3>
        {categories &&
          categories.map((category) => {
            return <FilterItem category={category} />;
          })}
      </article>
      <article>
        <h3>Price</h3>
        <div>
          <input type="number" name="" id="" step={"any"} /> $<span>- </span>
          <input type="number" name="" id="" step={"any"} /> $
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
