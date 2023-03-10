import FilterItem from "../../components/filterItem/FilterItem";
import zurückButton from "../../images/zurückButton.png";
import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState(["Apple","Nike","adidas","Lenovo","Sony","Nescafé","Dior","Lego","Braun","L'Oreal","Zara"]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  function handleApllyFilter(e) {
    const categoiesCheckedUrls = []
    
    document.querySelectorAll("div .category input[type=checkbox]").forEach((input)=>{
        if (input.checked) {
            return categoiesCheckedUrls.push(`https://dummyjson.com/products/category/${input.name}`); 
        }
    })
    
    fetchProductsFromCheckedCategories(categoiesCheckedUrls)
    .then((productsPromises) => {
        Promise.all(productsPromises).then((fetchedProducts) => {
            fetchedProducts.forEach((fetchedProduct) => {
                products.push(...fetchedProduct.products);
                setProducts(products)
            })
            
        })
        .then(() => {
            products = filterBrands(products)
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
            return brandsChecked.push(`input.name`); 
        }
    })
    

    return products
  }
  function filterPriceSpan(products) {

    return products
  }

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
            return <FilterItem className="category" category={category} />;
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
