import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const topic = cart[i];
        total = total + topic.prise;
        
    }
    return (
        <div className="cart-container">
              <h1>Enrole Sumary</h1>
              <br/>
              <h5>Enrole item: {cart.length}</h5>
              <h5>Total Cost: ${total}</h5>
              <br/>
              <h3 className="happy-learning">Happy learning</h3>
              

        </div>
    );
};

export default Cart;