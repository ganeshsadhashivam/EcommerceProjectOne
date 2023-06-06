import React, { useEffect, useState } from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Logo from "../assets/logo.png";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";
const Header = () => {
  const cartItems = useSelector((state) => state.cart?.value);

  const count = getItemCount(cartItems);
  //   const [dropdown, setDropDown] = useState(false);

  // const handleDropDown = () => {
  //   console.log("dd");
  // };

  // useEffect(() => {
  //   handleDropDown();
  // }, []);
  return (
    <div>
      <header className="header-icons">
        <Link to="/" id="logo">
          <img src={Logo} alt="brandLogo" />
          <span>EShopping</span>
        </Link>
        <Searchbar />
        {/* <button>login</button> */}
        <ul className="icons">
          <li>
            <AiOutlineHeart />
          </li>
          <li>
            <HiOutlineUserCircle />
            {/* <Link to="/login"></Link>
            <Link to="/logout">logout</Link> */}
          </li>

          <li>
            <span id="cartitems-count">{count}</span>
            <AiOutlineShoppingCart />
            Cart
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
