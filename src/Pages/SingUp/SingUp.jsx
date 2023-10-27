import { Link, useNavigate } from "react-router-dom";
import login from "../../../public/images/login/login.svg";
import UseHook from "../../ProviderHook/UseHook";


const SingUp = () => {
  const {createUser,loginGoogle} = UseHook()
  const navigate = useNavigate()
    const handleCreate = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value 
        console.log(name,email,password)
      createUser(email,password)
      .then(res => {
        console.log(res.user)
        navigate("/")

      })
       .catch(error => {
        console.log(error.message)
       }) 
      };
      const handlegoogle =(media)=>{
        media()
      }

    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreate} className="card-body">
              <h1 className="text-3xl text-center font-bold">Sing Up </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sing Up"
                  className="btn bg-orange-600 text-white"
                />
              </div>
            </form>
            <div className="">
                <p className="text-center mt-0 text-gray-500 font-semibold text-lg">Or Sign Up with</p>
                <div className="flex justify-center items-center gap-5">
                    <button onClick={()=>handlegoogle(loginGoogle)} className="btn hover:bg-orange-600 hover:text-white">google</button>
                    <button className="btn hover:bg-orange-600 hover:text-white">l</button>
                    <button className="btn hover:bg-orange-600 hover:text-white">f</button>
                </div>
            </div>
            <div className="text-center p-4">
                <p >
                Already have an account? <span className="text-orange-600 font-bold"><Link to='/login' >Sign in</Link></span>
                </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingUp;