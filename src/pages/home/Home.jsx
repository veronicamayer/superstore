import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as React from 'react';
import { v4 as uuidv4 } from "uuid";

import "./Home.scss";


const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(window.sessionStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    window.sessionStorage.setItem(storageKey, JSON.stringify(value));
    
    
  }, [value, storageKey]);

  return [value, setValue];
};

const Home = () => {
  let [products, setProducts] = useLocalStorage("products", []);
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
    if (state && state.products.length > 0){
      setProducts(state.products)
      state = null;
      return
    } else {
      return
  }}, [state, setProducts]);

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
    products = [...products].sort((a, b) => a.price - b.price);
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
            return <Category key={uuidv4()} category={category} setProducts={setProducts} />;
          })}
      </article>

      {showDetailslist && (
        <div className="showDetailslist">
          <p>Sort by:</p>
          <a href="/home" onClick={handleSortByLowestPrice}>
            Lowest Price
          </a>
        </div>
      )}
      {!showDetailslist && 
      <div className="popular">
        <h3>Popular</h3>
        <a
          href="/home"
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
      </div>}
      <article className="allProducts">
        {products &&
          products.map((product) => {
            return (
              <Link key={uuidv4()} to={`/productDetails/${product.id}`} className="productCardLink">
                <ProductCard  key={uuidv4()} product={product} />
              </Link>
            );
          })}
      </article>
      <Footer />
    </section>
  );
};

export default Home;
