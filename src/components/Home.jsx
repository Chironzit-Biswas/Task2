
import {Branding} from "./Branding.jsx";
import {Hero} from "./Hero.jsx";
import {FeaturesCards} from "./FeaturesCards.jsx";
import {Statistics} from "./Statistics.jsx";
import {Feature} from "./Feature.jsx";
import {Testimonials} from "./Testimonials.jsx";





export const Home = () => {
    return (
        <div>
            <Hero />
            <Branding/>
            <FeaturesCards/>
            <Statistics />
            <Feature/>
            <Testimonials />
        </div>
    )
}