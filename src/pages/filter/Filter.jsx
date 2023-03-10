import FilterItem from "../../components/filterItem/FilterItem";
import zurückButton from "../../images/zurückButton.png";
import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Filter.scss";
const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState(["Apple","Nike","adidas","Lenovo","Sony","Nescafé","Dior","Lego","Braun","L'Oreal","Zara"]);
  let [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  async function handleApllyFilter(e) {
    const categoiesCheckedUrls = []
    
    document.querySelectorAll("div .category input[type=checkbox]").forEach((input)=>{
        if (input.checked) {
            return categoiesCheckedUrls.push(`https://dummyjson.com/products/category/${input.name}`); 
        }
    })
    if( categoiesCheckedUrls.length === 0) categoiesCheckedUrls.push("https://dummyjson.com/products?limit=100");
    
    fetchProductsFromCheckedCategories(categoiesCheckedUrls)
    .then((productsPromises) => {
        Promise.all(productsPromises).then((fetchedProducts) => {
            fetchedProducts.forEach((fetchedProduct) => {
                products.push(...fetchedProduct.products);
                setProducts(products)
            })
            
        })
        .then(() => {
            console.log(products);
            products = filterBrands(products)
            console.log(filterBrands(products));
            console.log(products)
            products = filterPriceSpan(products)
            setProducts(products)
            navigate("/",{ state: {products: products}});
        })

         
    })
    .catch((error) => console.log(error));
  }
  async function fetchProductsFromCheckedCategories(urls) {
    const responsePromises =  urls.map(async (url) => {
        return await fetch(url)
    })
    const productsPromises = responsePromises.map(async (resPromise)=> {
        return await resPromise
        .then((response) => response.json())
    })
    return productsPromises
  }

  function filterBrands(products) {
    const brandsChecked = []
    document.querySelectorAll("div .brand input[type=checkbox]").forEach((input)=>{
        if (input.checked) {
            return brandsChecked.push(input.name); 
        }
    })
    console.log(brandsChecked)
    if (brandsChecked.length === 0) return products
    return products.filter((product) => brandsChecked.includes(product.brand))
  }
  function filterPriceSpan(products) {

    return products
  }

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
            return <FilterItem className="category" category={category} />;
          })}
          </div>
      </article>
      <article>
        <h3>Price</h3>
        <div>
          <input type="number" placeholder="0" name="" id="" step={"any"} /> $<span> - </span>
          <input type="number" placeholder="100" name="" id="" step={"any"} /> $
        </div>
      </article>
      <article>
        <h3>Brands</h3>
        <div>
            {brands &&
            brands.map((brands) => {
                return <FilterItem className="brand" category={brands} />;
            })}
        </div>
      </article>
      <input type="button" value="Apply Filter" onClick={handleApllyFilter} />
    </section>
  );
};

export default Filter;
