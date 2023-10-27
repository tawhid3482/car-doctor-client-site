import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../public/images/login/login.svg";
import UseHook from "../../ProviderHook/UseHook";
import axios from "axios";
const Login = () => {
  const { loginGoogle, singInEmail } = UseHook();
  const location = useLocation();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInEmail(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        console.error(message);
      });
  };
  const handlegoogle = (media) => {
    media();
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-3xl text-center font-bold">Login </h1>
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
                  value="Login"
                  className="btn bg-orange-600 text-white"
                />
              </div>
            </form>
            <div className="">
              <p className="text-center mt-0 text-gray-500 font-semibold text-lg">
                Or Sign In with
              </p>
              <div className="flex justify-center items-center gap-5">
                <button
                  onClick={() => handlegoogle(loginGoogle)}
                  className="btn hover:bg-orange-600 hover:text-white"
                >
                  google
                </button>
                <button className="btn hover:bg-orange-600 hover:text-white">
                  l
                </button>
                <button className="btn hover:bg-orange-600 hover:text-white">
                  f
                </button>
              </div>
            </div>
            <div className="text-center p-4">
              <p>
                Have no account?{" "}
                <span className="text-orange-600 font-bold">
                  {" "}
                  <Link to="/singUp">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
