import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shayed/Footer/Footer";
import Navbar from "../Pages/Shayed/Navbar/Navbar";

const MainlayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainlayOut;
