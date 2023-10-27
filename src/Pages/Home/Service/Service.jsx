import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";


const Service = () => {
    const [services ,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="m-5">
            <div className="text-center space-y-3
           w-[750px] mx-auto mb-5 ">
                <h2 className="text-3xl text-orange-600 font-bold"> Service</h2>
                <h2 className="text-5xl font-bold">Our Service Area </h2>
                <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map((service)=><ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;