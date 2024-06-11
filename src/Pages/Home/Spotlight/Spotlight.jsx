const Spotlight = () => {
  return (
    <div className="pb-10 bg-base-200 pt-20">
      <h1 className="text-4xl font-bold">RoamRoutes Spotlight</h1>
      <p className="text-2xl mt-2 mb-10">
        Find out what’s happening at RoamRoutes—from the latest travel news to
        our special offers.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Flash Sale</h2>
            <p>
              Get up to 60% OFF the world's best adventures, from island hopping
              in Greece to hiking Machu Picchu—every day a new destination, so
              get it while it's hot!
            </p>
            <div>
              <button className="btn btn-ghost">View Deals</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Guide of the Year is LIVE!</h2>
            <p>
            More than an award—this is a celebration of the standout guides bringing the innovation and dedication to make every organized adventure unforgettable!
            </p>
            <div>
              <button className="btn btn-ghost">View Deals</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Our Climate Action Plan</h2>
            <p>
            We aim to develop an impact measurement tool to simplify carbon measurement and reporting. We also set a goal for all operators to have sustainability plans by 2030.            </p>
            <div>
              <button className="btn btn-ghost">View Deals</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
