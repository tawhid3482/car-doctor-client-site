const CheckBanner = () => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg?w=2000)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className=" text-left  ">
          <div className="">
            <h1 className=" text-5xl font-bold  text-white">
             Check Out
            </h1>
          </div>
           {/* <div className="absolute lg:bottom-36 ml-10 ">
           <button className="btn bg-orange-600 border-none   text-white">Home/Checkout</button>
           </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckBanner;
