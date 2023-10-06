import React from 'react';
import './HomePage.css';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
function Contact() {
    return (<>
        <Header />
        <section id="page-header" className="about-header">

            <h2>#let's_talk</h2>
            <p>LEAVE A MESSAGE, We love to hear from you!</p>

        </section>

        <section id="contact-details" className="section-p1">
            <div className="details">
                <span>GET IN TOUCH</span>
                <h2>Visit one of our agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i className="fal fa-map"></i>
                        <p>Kasganj 207127 UP | India </p>
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <p>info@funkipana.com </p>
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <p>7453969143</p>
                    </li>

                </div>
            </div>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d245.3266322568121!2d78.63330114883689!3d27.797016529987843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQ3JzQ5LjMiTiA3OMKwMzcnNTkuNSJF!5e0!3m2!1sen!2sin!4v1688838747010!5m2!1sen!2sin"
                    width="600" height="450" style={{border: '0'}}
                    allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section id="form-details">
            <form action="">
                <span>LEAVE A MESSAGE</span>
                <h2>We love to hear from you </h2>
                <input type="text" name="" id="" placeholder="Your Name" />
                <input type="text" name="" id="" placeholder="E-mail" />
                <input type="text" name="" id="" placeholder="Subject" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button className="normal">Submit</button>
            </form>
            <div className="people">
                <div>
                    <img src="img/people/1.png" alt="" />
                    <p><span>Abhay Gupta</span> Senior Marketing Manager <br /> Phone: + 000 123 000 77 88 <br /> Email:
                        abhaygupta@funkipana.com</p>
                </div>
                <div>
                    <img src="img/people/2.png" alt="" />
                    <p><span>Madhur Krishna Agrawal</span> Chief financial officer <br /> Phone: + 000 123 000 77 88 <br /> Email:
                        madhur.agrawal@funkipana.com</p>
                </div>
                <div>
                    <img src="img/people/3.png" alt="" />
                    <p><span>Praksh Singh Jadon</span>Brand ambassador & Marketing Manager <br /> Phone: + 000 123 000 77 88 <br />
                        Email:
                        praksh.jadon@funkipana.com</p>
                </div>
            </div>
        </section>

        <Footer />

    </>);
}
export default Contact;
