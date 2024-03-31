import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerarea">
      <div className="footerarea__top">
        <p>Back to Top</p>
      </div>
      <div className="footerarea__links">
        <div className="col">
          <h4>Get to Know Us</h4>
          <Link className="link" to="">
            <p>Careers</p>
          </Link>
          <Link className="link" to="">
            <p>Blog</p>
          </Link>
          <Link className="link" to="">
            <p>About Amazon</p>
          </Link>
          <Link className="link" to="">
            <p>Investor Relations</p>
          </Link>
          <Link className="link" to="">
            <p>Amazon Devices</p>
          </Link>
          <Link className="link" to="">
            <p>Amazon Science</p>
          </Link>
        </div>
        <div className="col">
          <h4>Make Money with Us</h4>
          <Link className="link" to="">
            <p>Sell products on Amazon</p>
          </Link>
          <Link className="link" to="">
            <p>Sell on Amazon Business</p>
          </Link>
          <Link className="link" to="">
            <p>Sell apps on Amazon</p>
          </Link>
          <Link className="link" to="">
            <p>Become an Affiliate</p>
          </Link>
          <Link className="link" to="">
            <p>Advertise Your Products</p>
          </Link>
          <Link className="link" to="">
            <p>Self-Publish with Us</p>
          </Link>
          <Link className="link" to="">
            <p>Host an Amazon Hub</p>
          </Link>
        </div>
        <div className="col">
          <h4>Amazon Payment Products</h4>
          <Link className="link" to="">
            <p>Amazon Business Card</p>
          </Link>
          <Link className="link" to="">
            <p>Shop with Points</p>
          </Link>
          <Link className="link" to="">
            <p>Reload Your Balance</p>
          </Link>
          <Link className="link" to="">
            <p>Amazon Currency Convertor</p>
          </Link>
        </div>
        <div className="col">
          <h4>Let Us Help You</h4>
          <Link className="link" to="">
            <p>Amazon and COVID-19</p>
          </Link>
          <Link className="link" to="">
            <p>Your Account</p>
          </Link>
          <Link className="link" to="">
            <p>Your Orders</p>
          </Link>
          <Link className="link" to="">
            <p>Shipping Rates & Policies</p>
          </Link>
          <Link className="link" to="">
            <p>returns and Replacements</p>
          </Link>
          <Link className="link" to="">
            <p>Manage Your Content and Devices</p>
          </Link>
          <Link className="link" to="">
            <p>Amazon Assistant</p>
          </Link>
          <Link className="link" to="">
            <p>Help</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
