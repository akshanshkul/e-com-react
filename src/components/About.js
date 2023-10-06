import React from 'react';
import './HomePage.css';
import './About.css'
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
function About() {
    return (<>
        <Header />
        <section id="about-head" class="section-p1">
            <img src="img/about/a6.jpg" alt="" />
            <div>
                <h2>Who We Are?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis auteirure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic
                    and Creative modes.</abbr>

                <br /><br />

                <div className="marquee-container">
                    <p className="marquee-text">
                        Create stunning images with as much or as little
                        control as you like thanks to a choice of Basic and Creative modes.
                    </p>
                </div>
            </div>
        </section>
        <section id="feature" class="section-p1">
            <div class="fe-box">
                <img src="img/features/f1.png" alt="" />
                <h6>Free Shipping</h6>
            </div>
            <div class="fe-box">
                <img src="img/features/f2.png" alt="" />
                <h6>Online Order</h6>
            </div>
            <div class="fe-box">
                <img src="img/features/f3.png" alt="" />
                <h6>Save Money</h6>
            </div>
            <div class="fe-box">
                <img src="img/features/f4.png" alt="" />
                <h6>Promotions</h6>
            </div>
            <div class="fe-box">
                <img src="img/features/f5.png" alt="" />
                <h6>Happy Sell</h6>
            </div>
            <div class="fe-box">
                <img src="img/features/f6.png" alt="" />
                <h6>F24/7 Support</h6>
            </div>
        </section>

        <section id="newsletter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your email address" />
                <button class="normal">Sign Up</button>
            </div>
        </section>

        <Footer />

    </>);
}
export default About;
