import { logo } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setbtn] = useState("Log in");

  return (
    <div id="head">
      <img className="logo" src={logo} alt="img" height="50px" width="150px" />
      <div className="nav">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
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
