import { LuUserCircle2 } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li className="mx-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="grid grid-cols-2">
      <div>
          <h1>Roam Routes</h1>
      </div>
      <div className="navbar bg-base-100">
      {/* <div className="navbar-start">
        
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div> */}
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {/* dynamic nav link */}
          {navItems}
        </ul>
      </div>
      <div className="navbar-end ">
       <Link><button className="btn mr-3">Login</button></Link>
       <GiSelfLove className="text-3xl mr-5" title="Wish List" />
          <LuUserCircle2 className="text-3xl"></LuUserCircle2>
        
        <div className="dropdown ml-2 relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={1}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-2"
          >
            {/* dynamic nav link */}
            {navItems}
          </ul>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Header;
