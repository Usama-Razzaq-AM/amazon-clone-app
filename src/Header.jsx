import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, logInUser }, dispatch] = useStateValue();

  // console.log("my basket", basket);
  const logoutUser = () => {
    if (logInUser) {
      auth.signOut();
    }
  };
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        /> */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {/* 1st link */}
          <Link to={!logInUser && "/login"} className="header__link">
            <div onClick={logoutUser} className="header__option">
              <span className="header__optionLineOne">
                Hello, {logInUser?.email}
              </span>
              <span className="header__optionLineTwo">
                {logInUser ? "Signout" : "Sign In"}
              </span>
            </div>
          </Link>
          {/* 2nd Link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
        </div>
        {/*Basket icon with number */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            {/* number of items in the basket */}
            <span className="header__optionLineOne header__productCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Header;
