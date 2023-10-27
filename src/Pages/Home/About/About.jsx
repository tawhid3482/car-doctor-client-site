import person from "../../../../public/images/about_us/person.jpg";
import parts from "../../../../public/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 absolute right-0 top-1/2 border-8 border-white rounded-xl  shadow-2xl" />
          </div>
          <div className="lg:w-1/2 p-4 space-y-4">
            <h2 className="text-orange-600 font-bold text-3xl">About us</h2>
            <h1 className="text-5xl font-bold w-[370px]">We are qualified & of experience in this field</h1>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. 
            </p>
            <p className="">
            the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. 
            </p>
            <button className="btn bg-orange-600 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
