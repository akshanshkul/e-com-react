
// import React, { useState } from 'react';

import './HomePage.css';
import heroBanner from '../assets/hero4.png';
import productImage1 from '../assets/products/f2.jpg';
import productImage2 from '../assets/products/f3.jpg';
import productImage3 from '../assets/products/f4.jpg';
import productImage4 from '../assets/products/f5.jpg';
import productImage5 from '../assets/products/f6.jpg';
import productImage6 from '../assets/products/f7.jpg';
import productImage7 from '../assets/products/f8.jpg';

function HomePage() {
  const heroBannerImage = {
    backgroundImage: `url(${heroBanner})`,
  };
  
  return (
    <div>
      

      <div className="profile-card-hover">
        <div className="name">Akshansh</div>
      </div>
      <section id="hero" style={heroBannerImage}>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <button>Shop Now</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="img/features/f1.png" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f2.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f3.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f4.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f5.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="img/features/f6.png" alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={productImage2} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage1} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage3} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage4} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage5} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage6} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src={productImage7} alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="./asset/img/products/f8.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services </h4>
        <h2>Up to<span>70% Off</span> – All t-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src="img/products/n1.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n2.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n3.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n4.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n5.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n6.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n7.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href="/Cart"><i className="fal fa-shopping-cart cart"></i></a>
          </div>
          <div className="pro">
            <img src="img/products/n8.jpg" alt="" />
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
              <h4> &#x20B9;78</h4>
            </div>
            <a href><i className="fal fa-shopping-cart cart"></i></a>
          </div>
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring/summer</h4>
          <h2>upcomming season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION </h2>
          <h3>Spring / Summer 2022</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
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
    </div>
  );
}

export default HomePage;
