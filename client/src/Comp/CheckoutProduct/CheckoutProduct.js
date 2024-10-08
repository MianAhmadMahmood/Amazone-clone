import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt={title} /> {/* Added alt attribute */}

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐️</p> // Added key prop
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    );
};

export default CheckoutProduct;
