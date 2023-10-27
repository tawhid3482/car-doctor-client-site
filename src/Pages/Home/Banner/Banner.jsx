import img1 from "../../../../public/images/banner/1.jpg";
import img2 from "../../../../public/images/banner/2.jpg";
import img3 from "../../../../public/images/banner/3.jpg";
import img4 from "../../../../public/images/banner/4.jpg";
import img5 from "../../../../public/images/banner/5.jpg";
import img6 from "../../../../public/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle hover:bg-orange-600">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide1" className="btn btn-circle hover:bg-orange-600">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide2" className="btn btn-circle hover:bg-orange-600">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide3" className="btn btn-circle hover:bg-orange-600">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide4" className="btn btn-circle hover:bg-orange-600 ">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center gap-5 h-full left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <div className="text-white space-y-7 pl-10">
            <h2 className="text-6xl font-bold w-2/5 ">Affordable Price For Car Servicing </h2>
            <p className=""> There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
            <div className="">
                <button className="btn mr-5 btn-error text-white">discover</button>
                <button className="btn btn-outline btn-error text-white">latest news</button>
            </div>
          </div>
          </div>
          <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide5" className="btn btn-circle hover:bg-orange-600">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-orange-600">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
