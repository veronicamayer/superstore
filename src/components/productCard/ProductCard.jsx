import { Link } from "react-router-dom";
import PlusBottomImage from "../../images/plusButton.png";

import "./ProductCard.scss";
const ProductCard = (props) => {
  return (
    <section id="productCard">
      <Link to={"/productDetails/" + props.product.id}>
        <div>
          <img className="productImg" src={props.product.images[0]} alt="" />
        </div>
        <div>
          <p>
            <span>⭐️</span>
            {props.product.rating}
          </p>
          <article id="flexDetailsUndPreis">
            <div>
              <h1>{props.product.title}</h1>
              <p>${props.product.price}</p>
            </div>
            <div className="productCardLastImg">
              <img className="buttonImg" src={PlusBottomImage} alt="" />
            </div>
          </article>
        </div>
      </Link>
    </section>
  );
};

export default ProductCard;
