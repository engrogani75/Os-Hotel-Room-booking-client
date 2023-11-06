import { Outlet } from "react-router-dom";
import Nav from "../Component/Navbar/Nav";


const Mainlayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;

// https://cozystay.loftocean.com/island-resort/