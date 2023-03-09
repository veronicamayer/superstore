import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

import "./Home.scss";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showDetailslist, setShowDetailslist] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, []);


    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((products) =>setProducts(products.products))
        .catch((error) => console.error(error));

    }, []);

    return (
        <section id="home">
            {!showDetailslist && <h2>Find your favorite Product</h2>}
            <Header setProducts={setProducts} setShowDetailslist={setShowDetailslist}/>
            <article className="allCategories">
                {!showDetailslist && categories &&
                    categories.map((category) => {
                        return <Category category={category} setProducts={setProducts}/>;
                    })}
            </article>
            <div className="popular">
                <h3>Popular</h3>
                <a href="">View all</a>
            </div>
            <article className="allProducts">
            {products &&
                products.map((product) => {
                    return <ProductCard product={product} />;
                })}
                </article>
            <Footer/>
        </section>
    );

};

export default Home;
