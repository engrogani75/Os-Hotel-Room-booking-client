import Feathured from "./Feathered/Feathured";
import HotelMap from "./Map/HotelMap";

import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <h1 className="text-center text-6xl font-bold my-6">Welcome to Our Service</h1>
            <Slider></Slider>
             <HotelMap></HotelMap>
             <Testimonials></Testimonials>
             <Feathured></Feathured>
            
        </div>
    );
};

export default Home;