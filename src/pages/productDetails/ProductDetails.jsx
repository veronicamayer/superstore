import zurückButton from "../../images/zurückButton.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../../images/Star.png";
import "./ProductDetails.scss";
import Footer from "../../components/footer/Footer";
const ProductDetails = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="ganzeSectionBGD">
      {products.images && (
        <div>
          <div className="headerProductDetails">
            <Link to="/">
              <img src={zurückButton} alt="zurückButton.png" />
            </Link>
            <p>{products.title}</p>
          </div>
          <article className="productCardDetails">
            <div>
              <img
                className="imgProductDetails"
                src={products.images[0]}
                alt=""
              />
            </div>
            <article>
              <div className="productNameRate">
                <h3>{products.title}</h3>
                <p>
                  <span>
                    <img className="starImg" src={Star} alt="" />
                  </span>
                  {products.rating}
                </p>
              </div>
              <div>{/* TODO counter */}</div>
            </article>
            <article className="flexProductStockPreis">
              <div className="productStock">
                <p>
                  <span>{products.stock} </span>
                  pieces in stock
                </p>
              </div>
              <div className="productPrice">$ {products.price}</div>
            </article>
          </article>
        </div>
      )}
      <article className="description">
        <p className="descriptionP">Description</p>
        <div>
          <p className="descriptionPLast">{products.description}</p>
        </div>
        <button className="buttonAddToCard">Add to Cart</button>
      </article>

      <Footer />
    </section>
  );
};

export default ProductDetails;

/* console.log(products.title); */
