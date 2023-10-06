import React from 'react';
import './Footer.css';
import payImage from '../assets/pay/pay.png';
import logo from '../assets/logo.png';

export function Header() {
    return (
        <>

            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src={logo} alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address: </strong> Kasganj 207123</p>
                    <p><strong>Phone:</strong> (+91) 7453969143</p>
                    <p><strong>Hours:</strong> 24 <i className="fa fa-times" aria-hidden="true"></i> 7<a
                        href="www.funkipana.com">Funkipana.com</a> </p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h4>About</h4>
                    <a href="/">About Us</a>
                    <a href="/">Delivery Information</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Contact Us</a>
                </div>

                <div className="col">
                    <h4>My Account</h4>
                    <a href="/">Sign In</a>
                    <a href="/">View Cart</a>
                    <a href="/">My Wishlist</a>
                    <a href="/">Track My Order</a>
                    <a href="/">Help</a>
                </div>

                <div className="col install">

                    <p>Secured Payment Gateways </p>
                    <img src={payImage} alt="" />
                </div>

                <div className="copyright">
                    <p>© 2023 | Funnkipana.com </p>
                </div>
            </footer>
        </>
    );
}
export default Header;
