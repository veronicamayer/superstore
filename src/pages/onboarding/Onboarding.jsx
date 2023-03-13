import { Link } from "react-router-dom";
import SplashScreen from "../../components/splashScreen/SplashScreen";
import './Onboarding.scss';
import illustration from '../../images/Illustration.png';

const Onboarding = () => {
    return (
        <section id="onboarding">
            <SplashScreen/>
            <img src={illustration} alt="" />
            <h1>Biggest Sell at Your Fingerprint</h1>
            <p>Find your best products from popular shop without any delay</p>
            <Link to={"/home"}>Get Started</Link>
        </section>
    );
};

export default Onboarding;
