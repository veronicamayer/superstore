import { Link } from "react-router-dom";
import SplashScreen from "../../components/splashScreen/SplashScreen";
import './Onboarding.scss';
import illustration from '../../images/Illustration.png';

import { useState, useEffect } from "react";

const Onboarding = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

          fetch("https://dummyjson.com/products?limit=10")
          .then((res) => res.json())
          .then((products) => {
            console.log(products);
            return setProducts(products.products);
          })
          .catch((error) => console.error(error));


      }, []);


    return (
        <section id="onboarding">
            <SplashScreen/>
            <img src={illustration} alt="" />
            <h1>Biggest Sell at Your Fingerprint</h1>
            <p>Find your best products from popular shop without any delay</p>
            <Link to={"/home" } state= {{products:products}}>Get Started</Link>
        </section>
    );
};

export default Onboarding;