import { TbWorldSearch } from "react-icons/tb";
import { GiLoveMystery } from "react-icons/gi";


const BookTheBestTour = () => {
  return (
    <div>
      <div className="hero bg-base-200 pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-14">
              Book the World’s Best Tours and River Cruises
            </h1>
            <h1 className="text-3xl font-bold">
              Organized Adventures:{" "}
              <span className="text-orange-500">The Ultimate Travel Hack</span>
            </h1>
            <p className="py-6 font-semibold">
              At Roam Routes, we believe adventure is the ultimate
              life-enriching experience that enables you to explore our world in
              new ways. And all you have to do is show up—because we found the
              ultimate travel hack.
              <br />
              <br />
              Introducing: organized adventures. Take the stress out of travel
              and live your best life.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
        
      </div>
      {/* Sustainable Travel and Peace of Mind Section */}
      <div className="flex bg-base-200 pt-12">
        <div className="flex m-5">
          <div>
            <h2 className="text-3xl font-semibold mb-5">Sustainable Travel</h2>
            <p>
              Adventure sustainably with RoamRoutes. We are committed to
              conscious travel, from responsible operators to our Climate Action
              Plan and carbon measurements.
            </p>
          </div>
          <div >
            <TbWorldSearch className="size-40 text-orange-400" />
          </div>
        </div>
        <div className="flex m-5">
          <div>
            <h2 className="text-3xl font-semibold mb-5">Peace of Mind</h2>
            <p>
            With 24/7 customer service, flexible booking conditions and extensive insurance options, we are there for you when plans change.
            </p>
          </div>
          <div >
            <GiLoveMystery className="size-40 text-orange-400" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BookTheBestTour;
