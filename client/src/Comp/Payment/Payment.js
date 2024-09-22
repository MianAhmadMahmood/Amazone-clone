import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';
import { db } from '../../Firebase'; // Adjust the path as necessary
import { doc, setDoc } from 'firebase/firestore';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        try {
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                console.error("Stripe error:", error);
                setError(`Payment failed: ${error.message}`);
                setProcessing(false);
            } else {
                // Save order to Firestore
                await setDoc(doc(db, 'users', user?.uid, 'orders', paymentIntent.id), {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });

                setSucceeded(true);
                setError(null);
                setProcessing(false);
                dispatch({ type: 'EMPTY_BASKET' });
                navigate('/orders');
            }
        } catch (error) {
            console.error("Error during payment confirmation:", error);
            setError(`Payment failed: ${error.message}`);
            setProcessing(false);
        }
    };

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Delivery Address Section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email || 'Guest'}</p>
                        <p>123 ABC Street</p>
                        <p>Lahore, PK</p>
                    </div>
                </div>

                {/* Review Items Section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method Section */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Order Total: {value}</h3>}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div className="payment_error">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
