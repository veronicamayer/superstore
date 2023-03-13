import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  let [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showDetailslist, setShowDetailslist] = useState(false);
  const [togglePopular, setTogglePopular] = useState(true);
  let { state } = useLocation();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        return setProducts(products.products);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleViewAllClick(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.error(error));
    document.querySelector("div .popular h3").innerHTML = "All Products";
    document.querySelector("div .popular a").innerHTML = "Popular";
    setTogglePopular(!togglePopular);
    console.log(togglePopular);
  }
  function handlePopularClick(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.error(error));
    document.querySelector("div .popular h3").innerHTML = "Popular";
    document.querySelector("div .popular a").innerHTML = "All Products";
    setTogglePopular(!togglePopular);
    console.log("test");
  }
  useEffect(() => {
    if (state) return setProducts(state.products);
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.error(error));
  }, []);

  function handleViewAllClick(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.error(error));
    document.querySelector("div .popular h3").innerHTML = "All Products";
    document.querySelector("div .popular a").innerHTML = "Popular";
    setTogglePopular(!togglePopular);
    console.log(togglePopular);
  }
  function handlePopularClick(e) {
    e.preventDefault();
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.error(error));
    document.querySelector("div .popular h3").innerHTML = "Popular";
    document.querySelector("div .popular a").innerHTML = "All Products";
    setTogglePopular(!togglePopular);
    console.log("test");
  }

  function handleSortByLowestPrice(e) {
    e.preventDefault();
    console.log(products);
    products = products.sort((a, b) => a.price - b.price);
    setProducts(products);
  }

  return (
    <section id="home">
      {!showDetailslist && <h2>Find your favorite Product</h2>}
      <Header
        setProducts={setProducts}
        setShowDetailslist={setShowDetailslist}
      />
      <article className="allCategories">
        {!showDetailslist &&
          categories &&
          categories.map((category) => {
            return <Category category={category} setProducts={setProducts} />;
          })}
      </article>
      {showDetailslist && (
        <div>
          <p>Sort by:</p>
          <a href="" onClick={handleSortByLowestPrice}>
            Lowest Price
          </a>
        </div>
      )}
      {!showDetailslist && (
        <div className="popular">
          <h3>Popular</h3>
          <a
            href="/"
            onClick={(e) => {
              if (togglePopular) {
                handleViewAllClick(e);
              } else {
                handlePopularClick(e);
              }
            }}
          >
            All Products
          </a>
        </div>
      )}
      <article className="allProducts">
        {products &&
          products.map((product) => {
            return (
              <Link to={`/productDetails/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          })}
      </article>
      <Footer />
    </section>
  );
};

export default Home;
