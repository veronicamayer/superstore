import { v4 as uuidv4 } from "uuid";
import './Category.scss';

/* images import */
import smartphones from "../../images/smartphones.png";
import laptops from "../../images/laptops.png";
import fragrances from "../../images/fragrances.png";
import skincare from "../../images/skincare.png";
import groceries from "../../images/groceries.png";
import homeDecoration from "../../images/fragrances.png";
import furniture from "../../images/furniture.png";
import tops from "../../images/tops.png";
import womensDresses from "../../images/womens-dresses.png";
import womensShoes from "../../images/womens-shoes.png";
import mensShirts from "../../images/mens-shirts.png";
import mensShoes from "../../images/mens-shoes.png";
import mensWatches from "../../images/mens-watches.png";
import womensWatches from "../../images/womens-watches.png";
import womensBags from "../../images/womens-bags.png";
import womensJewellery from "../../images/womens-jewellery.png";
import sunglasses from "../../images/sunglasses.png";
import automotive from "../../images/automotive.png";
import motorcycle from "../../images/motorcycle.png";
import lighting from "../../images/lighting.png";

const Category = (props) => {
    let imageSrc;
    switch (props.category) {
        case "smartphones":
            imageSrc = smartphones;
            break;
        case "laptops":
            imageSrc = laptops;
            break;
        case "fragrances":
            imageSrc = fragrances;
            break;
        case "skincare":
            imageSrc = skincare;
            break;
        case "groceries":
            imageSrc = groceries;
            break;
        case "home-decoration":
            imageSrc = homeDecoration;
            break;
        case "furniture":
            imageSrc = furniture;
            break;
        case "tops":
            imageSrc = tops;
            break;
        case "womens-dresses":
            imageSrc = womensDresses;
            break;
        case "womens-shoes":
            imageSrc = womensShoes;
            break;
        case "mens-shirts":
            imageSrc = mensShirts;
            break;
        case "mens-shoes":
            imageSrc = mensShoes;
            break;
        case "mens-watches":
            imageSrc = mensWatches;
            break;
        case "womens-watches":
            imageSrc = womensWatches;
            break;
        case "womens-bags":
            imageSrc = womensBags;
            break;
        case "womens-jewellery":
            imageSrc = womensJewellery;
            break;
        case "sunglasses":
            imageSrc = sunglasses;
            break;
        case "automotive":
            imageSrc = automotive;
            break;
        case "motorcycle":
            imageSrc = motorcycle;
            break;
        case "lighting":
            imageSrc = lighting;
            break;
        default:
            imageSrc = null;
            break;
    }

    function handleOnCklick(e) {
        fetch(`https://dummyjson.com/products/category/${props.category}`)
        .then((res) => res.json())
        .then((products) =>{
            console.log(products);
            props.setProducts(products.products)
        })
        .catch((error) => console.error(error));
    }

    return (
        <article key={uuidv4()} id="category" onClick={handleOnCklick}>
            <img src={imageSrc} alt="" />
            <p>{props.category}</p>
        </article>
    );
};

export default Category;
