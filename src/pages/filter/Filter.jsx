import FilterItem from "../../components/filterItem/FilterItem";
import zurückButton from "../../images/zurückButton.png";
import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Filter.scss";
const Filter = () => {
  const [categories, setCategories] = useState([]);
  const [brands] = useState(["Apple","Samsung","OPPO","Huawei","Microsoft Surface","HP Pavilion","Al Munakh","L'Oreal Paris","Hemani Tea","Dermive","Baking Food Items","fauji","Flying Wooden"]);
  let [products, setProducts] = useState([]);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

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
            products = filterBrands(products)
            products = filterPriceSpan(products)
            setProducts(products)
            navigate("/home",{ state: {products: products}});
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
    console.log(minPrice);
    console.log(maxPrice);
    console.log(products);

    const filteredProducts = products.filter(product => {
    const price = parseFloat(product.price);
    if (!isNaN(price)) {
      if (minPrice !== '' && price < parseFloat(minPrice)) {
        return false;
      }
      if (maxPrice !== '' && price > parseFloat(maxPrice)) {
        return false;
      }
      return true;
    }
    return false;
  });
  console.log(filteredProducts);

  setProducts(filteredProducts);
  return filteredProducts;
  }

  return (
    <section id="filter">
      <div>
        <Link to="/home">
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
          <input type="number" placeholder="0" name="min-price" id="min-price" value={minPrice} step={"any"} onChange={event => setMinPrice(event.target.value)}/> $<span> - </span>
          <input type="number" placeholder="100" name="max-price" id="max-price" value={maxPrice} step={"any"} onChange={event => setMaxPrice(event.target.value)}/> $
        </div>
      </article>
      <article>
        <h3>Brands</h3>
        <div id="brands">
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
