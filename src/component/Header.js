import { logo } from "../utils/constant";
const Header=()=>{
    return (
        
        <div id="head">
            <img className="logo" src={logo} alt="img" height="50px" width="200px"/>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;