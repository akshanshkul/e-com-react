import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setIsSticky(currentScroll > 150);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    return (
        <>
            <section id="header" className={`page-header ${isSticky ? 'is-sticky' : ''}`}>
                <a href="/" className="logo-a">
                    <img src={logo} className="logo" alt="" />
                </a>
                <div className="search-container">
                    <form>
                        <input
                            type="search"
                            id="search-box"
                            className="search-input-box"
                            placeholder="Search..."
                        />
                        <button type="submit">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="/">Home</a></li>
                        <li><a href="/Shop">Shop</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li
                            id="my-account"
                            className="notMobile"
                        >
                            <a href id="form-open" onClick={openForm}>
                                Login
                            </a>
                        </li>
                        <li id="lg-bag">
                            <a href="/Cart"><i className="far fa-shopping-bag"></i></a>
                        </li>
                        <a href id="close"><i className="far fa-times"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="/Cart"><i className="far fa-shopping-bag"></i></a>
                    <a href="account.php" id="my-account"><i className="fa fa-user" aria-hidden="true"></i></a>
                    <a href id="form-open-mobile" onClick={openForm} style={{ cursor: 'pointer' }}></a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>
            {isFormOpen && (
                <section className="form-section">
                    <div className="form_container">
                        <i className="uil uil-times form_close" onClick={closeForm}></i>
                        <div className="form login_form">
                            <form action="#">
                                <h2>Login</h2>

                                <div className="input_box">
                                    <input type="email" id="email" placeholder="Enter your email/mobile" required />
                                    <i className="uil uil-envelope-alt email"></i>
                                </div>
                                <div className="input_box">
                                    <input type="password" id="password" placeholder="Enter your password" required />
                                    <i className="uil uil-lock password"></i>
                                    <i className="uil uil-eye-slash pw_hide"></i>
                                </div>

                                <div className="option_field">
                                    <span className="checkbox">
                                        <input type="checkbox" id="check" />
                                        <label htmlFor="check">Remember me</label>
                                    </span>
                                    <a href="/Forget" className="forgot_pw">Forgot password?</a>
                                </div>

                                <button className="button">Login Now</button>

                                <div className="login_signup">Don't have an account? <a href="/Login" id="signup">Signup</a></div>
                            </form>
                        </div>

                        <div className="form signup_form">
                            <form action="insert.php" method="post">
                                <h2>Signup</h2>

                                <div className="input_box">
                                    <input type="email" placeholder="Enter your email" name="email" required />
                                    <i className="uil uil-envelope-alt email"></i>
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder="Enter your mobile" name="mobile" required />
                                    <i className="uil uil-lock password"></i>
                                    <i className="uil uil-eye-slash pw_hide"></i>
                                </div>
                                <div className="input_box">
                                    <input type="password" placeholder="password" name="password" required />
                                    <i className="uil uil-lock password"></i>
                                    <i className="uil uil-eye-slash pw_hide"></i>
                                </div>

                                <button className="button" name="register-btn">Signup Now</button>

                                <div className="login_signup">Already have an account? <a href="/Login" id="login">Login</a></div>
                            </form>
                        </div>
                    </div>
                </section >
            )
            }
        </>
    );
}

export default Header;
