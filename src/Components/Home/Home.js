import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exist = cart.find((item) => item._id === tshirt._id);
        if (exist) {
            alert('This item is already added to cart');
        } 
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const removeFromCart = (tshirt) => {
        const newCart = cart.filter((item) => item._id !== tshirt._id);
        setCart(newCart);
    }


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                tshirts.map(tshirt => <Tshirt
                     key={tshirt._id} 
                     tshirt={tshirt}
                     handleAddToCart={handleAddToCart}
                     ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;