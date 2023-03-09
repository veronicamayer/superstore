import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import ProductCard from "../../components/productCard/ProductCard"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  return (
      <section>
        <h2>
          Find your favorite Product
        </h2>
        <Header/>
        {categories && categories.map(category => {return (
          <Category/>
        )})}
        <div>
          <h2>Popular</h2>
          <a href="">View all</a>
        </div>
        {products && products.map(product => {return (
          <ProductCard/>
        )})}
        <Footer/>

      </section>

  )
};

export default Home;
