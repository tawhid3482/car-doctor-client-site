import { useLoaderData } from "react-router-dom";
import CheckBanner from "../Shayed/CheckBanner/CheckBanner";
import UseHook from "../../ProviderHook/UseHook";

const CheckOut = () => {
  const service = useLoaderData();
  const {price,_id,img,title}=service
const {user}= UseHook()
  const handleOrder= e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const data = form.date.value 
    const email = user?.email 
    const order = {
      customerName: name ,
      data ,
      email,
      img,
      price: price,
      service:title,
      serviceId : _id
    } 
    fetch('http://localhost:5000/checkouts',{
    method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
      
      if(data.insertedId){
        alert('successfully added')
        form.reset()
      }
    })

  }
  return (
    <div>
      <CheckBanner></CheckBanner>
      <h2 className="text-3xl text-center font-bold m-4">Service Name: {title}</h2>
      <form onSubmit={handleOrder}  className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date </span>
            </label>
            <input
             type="date" 
            name="date"
            className="input input-bordered" 
             />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Due</span>
            </label>
            <input
              type=""
              defaultValue={'$' + price}
              placeholder=""
              className="input input-bordered"
              required
            />
        
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="order confirm"
            className="btn bg-orange-600 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
