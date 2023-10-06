import React from 'react';
import './HomePage.css';
import Header from './Header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component
import cartImage from '../assets/products/f2.jpg';
function Cart() {
    return (
        <>
            <Header />
            <section id="page-header" className="about-header">

                <h2>#cart</h2>
                <p>Add your coupon code & SAVE upto 70%!</p>

            </section>
            <section id="cart" className="section-p1">
                <h3>Cart Items</h3>

                <div className="cart-items">
                    <div className="box">

                        <div className="img box-image"><img src={cartImage} alt=""/></div>

                        <div className="product-name"><span>Bet Red Printed T-shirt cal at</span></div>
                        <div className="color large">
                            <div className="color-box" style={{backgroundColor: '#13b4ff'}}></div>
                        </div>
                        <div className="action box-action "><label>Qty:</label>
                            <select id="cart-item-qty">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <label>Size:</label>
                            <select id="cart-item-qty">
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                            </select>
                            <div className="color small">
                                <div className="color-box" style={{backgroundColor: '#13b4ff'}}></div>
                            </div>
                            <a href className="delete-icon"><span className="material-symbols-outlined ">
                                delete
                            </span></a>
                        </div>

                        <div className="price">&#x20B9;<span>200</span></div>
                    </div>
                </div>
            </section>

            <section id="cart-add" className="section-p1">
                <div id="cuopon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" name="" id="" placeholder="Enter Your Coupon"/>
                            <button className="normal">Apply</button>
                    </div>
                </div>

                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>&#x20B9; 335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>&#x20B9; 335</strong></td>
                        </tr>
                    </table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Cart;
