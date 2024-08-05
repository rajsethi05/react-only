import React from "react";
import "./Header.css";
function Header() {

  return (
    <div className="header">
      <div className="flex-container">
        <img
          src="icons/logo.svg"
          alt="Logo"
          className="logo"
        ></img>
        <a href="/" className="brand">KHANDELWAL1</a>
        <div className="navs">
        <div className="nav-item">
          <img src="icons/phone.svg" alt="phone" className="icons"/>
          <a href="tel:+91 9962049900" target="_blank" rel="noopener noreferrer" className="icon-text">+91-9962049900</a>
        </div>
        <div className="nav-item">
          <img src="icons/whatsapp-1.svg" alt="phone" className="icons"/>
          <a href="https://wa.me/+919962049900?text=Hi" target="_blank" rel="noopener noreferrer" className="icon-text">+91 9962049900</a>
        </div>
        <div className="nav-item">
          <img src="icons/location.svg" alt="phone" className="icons"/>
          <a href="https://maps.app.goo.gl/kjJqxsXxRSGyafvJ6" target="_blank" rel="noopener noreferrer" className="icon-text">Locate Us</a>
        </div>
      </div>
      </div>
      <div className="brand sub-brand">HARDWARE</div>
    </div>
  );
}
export default Header;