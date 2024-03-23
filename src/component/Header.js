import { logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setbtn] = useState("Log in");

  return (
    <div className="flex justify-between items-center bg-slate-500 px-4">
      <img className="w-40" src={logo} alt="logo"/>
      <div >
        <ul className="flex text-white">
          <li>
            <Link className="mx-4">Status:{useOnlineStatus()==false?"🔴":"🟢"}</Link>
          </li>
          <li>
            <Link className="mx-4" to="/">Home</Link>
          </li>
          <li>
            <Link className="mx-4" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="mx-4" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="mx-4" to="cart">Cart</Link>
          </li>
          <li>
            <Link className="mx-4" to="/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => {
              btn == "Log in" ? setbtn("Log out") : setbtn("Log in");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
