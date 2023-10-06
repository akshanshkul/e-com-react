import React from 'react';
import './HomePage.css';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
function ShopPage() {
  return (
    <>
    <Header/>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          <div className="pro" onClick={() => window.location.href = 'sproduct.html'}>
            <img src="img/products/f1.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          {/* Repeat similar code for other products */}
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/"><i className="fal fa-long-arrow-alt-right"></i></a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ShopPage;
