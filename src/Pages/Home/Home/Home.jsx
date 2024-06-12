import Accordion from "../Accordion/Accordion";
import Adenture from "../Adventure/Adenture";
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
            <Adenture></Adenture>
        </div>
    );
};

export default Home;