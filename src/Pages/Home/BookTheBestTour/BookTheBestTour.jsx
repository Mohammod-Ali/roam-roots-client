const BookTheBestTour = () => {
  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div >
          <h1 className="text-5xl font-bold mb-14">
        Book the World’s Best Tours and River Cruises
      </h1>
            <h1 className="text-3xl font-bold">
              Organized Adventures: <span className="text-orange-500">The Ultimate Travel Hack</span>
            </h1>
            <p className="py-6 font-semibold">
              At Roam Routes, we believe adventure is the ultimate life-enriching experience that enables you to explore our world in new ways. And all you have to do is show up—because we found the ultimate travel hack.
              <br />
            <br />
              Introducing: organized adventures. Take the stress out of travel and live your best life.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTheBestTour;
