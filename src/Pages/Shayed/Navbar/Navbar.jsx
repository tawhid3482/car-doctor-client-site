import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import UseHook from "../../../ProviderHook/UseHook";

const Navbar = () => {
  const { user, logout } = UseHook();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItem = (
    <>
      <li className="hover:bg-orange-600 rounded-lg ">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-orange-600 rounded-lg">
        <Link to="/about">About</Link>
      </li>
      {user?.email ? (
        <>
          <li className="hover:bg-orange-600 rounded-lg">
          <Link to="/checkout">My Bookings</Link>
          </li>

          <li className="hover:bg-orange-600 rounded-lg">
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li className="hover:bg-orange-600 rounded-lg">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-500 h-20  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="h-14 w-24 bg-white" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn btn-outline btn-error">Appoinment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
