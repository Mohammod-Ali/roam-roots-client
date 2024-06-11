import Accordion from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import BookTheBestTour from "../BookTheBestTour/BookTheBestTour";
import Spotlight from "../Spotlight/Spotlight";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookTheBestTour></BookTheBestTour>
            <Spotlight></Spotlight>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;