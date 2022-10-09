import React from 'react';

const Cart = ({cart,removeFromCart}) => {
    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>removeFromCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;