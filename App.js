import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
  <div className="header">
    <div class="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/food-cloche-2836ld.png"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>

      </ul>
    </div>
  </div>
);
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout);

