import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalCost = cart.reduce((total, player) => total + player.salary, 0);
    return (
        <div className="cart-container">
            <h4 className="padding">Player Added: {cart.length}</h4>
            <h4 className="padding">Player Name : {cart.map(player => <li>{player.name}</li>)}</h4>
            <h4 className="padding">Total Cost: ${totalCost}</h4>
        </div>
    );
};

export default Cart;