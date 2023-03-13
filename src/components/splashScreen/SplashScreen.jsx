import { useEffect } from "react";
import "./SplashScreen.scss";
import logo from "../../images/logo.png";

const SplashScreen = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 1000);

        return () => {
            clearTimeout(timer);

        };
    }, []);

    return (
        <section id="splashScreen" className="overlay">
            <img src={logo} alt="Superstore logo" />
        </section>
    );
};

export default SplashScreen;
