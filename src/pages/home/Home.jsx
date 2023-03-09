import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import ProductCard from "../../components/productCard/ProductCard";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <section>
            <h2>Find your favorite Product</h2>
            <Header />
            <article id="allCategories">
                {categories &&
                    categories.map((category) => {
                        return <Category category={category} />;
                    })}
            </article>
            <div>
                <h2>Popular</h2>
                <a href="">View all</a>
            </div>
            {products &&
                products.map((product) => {
                    return <ProductCard />;
                })}
            <Footer />
        </section>
    );
};

export default Home;
