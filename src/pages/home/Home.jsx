import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((products) => {
        console.log(products.products);
        setProducts(products.products);
      });
  }, []);
  return (
    <section>
      <h2>Find your favorite Product</h2>
      <Header setProducts={setProducts} />
      {categories &&
        categories.map((category) => {
          return <Category />;
        })}
      <div>
        <h2>Popular</h2>
        <a href="">View all</a>
      </div>
      {products &&
        products.map((product) => {
          return <ProductCard product={product} />;
        })}
      <Footer />
    </section>
  );
};

export default Home;
