import { logo } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btn, setbtn] = useState("Log in");

  return (
    <div id="head">
      <img className="logo" src={logo} alt="img" height="50px" width="150px" />
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
