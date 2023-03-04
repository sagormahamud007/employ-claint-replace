import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../contextApi/Authcontext";



const Navbar = () => {
  const neviget = useNavigate();
  const { user, logout } = useContext(myContext)

  const handleLogout = ()=>{
    logout()
    neviget('/')
  }

  // get all categorys

  return (
    <div className="bg-gray-900 text-white md:sticky lg:sticky md:top-0 lg:top-0">
      <nav className="flex justify-between p-5">
        <h2>Tanzil's Blogs</h2>

        <ul className={`md:flex lg:flex md:items-center lg:items-center`}>
          <li className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 mr-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white font-semibold tracking-tight"
            >
              Home
            </Link>
          </li>
         

          {user?.email ? (
            <>
             <li className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 mr-6">
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white font-semibold tracking-tight"
            >
              My Profile
            </Link>
          </li>
            <li className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 mr-6">
              <Link
                to="/addcast"
                className="text-gray-300 hover:text-white font-semibold tracking-tight"
              >
                Add Cast
              </Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <li className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 mr-6">
              <Link
                to="/login"
                className="text-gray-300 hover:text-white font-semibold tracking-tight"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
