import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from 'sweetalert2'


const Nav = () => {
  const {user, logout} = useContext(AuthContext)


  const logoutHandle = () =>{
    logout()
    .then(() => {

      Swal.fire({
        icon: 'success',
        title: 'Logou',
        text: 'Logout has been sucessfully',
      })

    })

    .catch((err) =>{
      console.error(err);
    })
  }


    return (
        <div>
            <div className="navbar bg-base-100 font-bold text-xl shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
       <NavLink
  to="/">
  Home
</NavLink>
       </li>
       <li>
      <NavLink
  to="/Room">
  Room
</NavLink>
      </li>

      <li>
      <NavLink
  to="/my-booking">
  My Booking
</NavLink>
      </li>

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Os Hotel</a>
  </div>
  <div className="navbar-center hidden lg:flex" >
    <ul className="menu menu-horizontal px-1 gap-10 uppercase">
       <li>
       <NavLink
  to="/">
  Home
</NavLink>
       </li>


      <li>
      <NavLink
  to="/Room">
  Room
</NavLink>
      </li>

      <li>
      <NavLink
  to="/my-booking">
  My Booking
</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">


  {
                user ? <>
                <div><img src={user.photoURL} className=" h-5 w-5 md:h-10 md:w-10 rounded-full mr-2" alt="" /></div>
                <span className="text-[11px] lg:text-xl">{user.displayName}</span>
                <a onClick={logoutHandle} href="#" className="text-[11px] lg:text-xl ml-4 text-white font-bold hover:text-gray-400">Log Out</a> 
                </>: <>
                <Link to={"/login"}>
                  <button className="bg-orange-600 px-4 py-2 border-2 rounded-xl text-white hover:bg-transparent hover:text-purple-500 duration-75">
                    Login</button>
                    </Link>
                </>
              }

  </div>
</div>
        </div>
    );
};

export default Nav;