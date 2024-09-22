import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  // Ensure order.data.created is a valid timestamp (in seconds)
  const formattedDate = moment(order.data.created * 1000).format("MMMM Do YYYY, h:mm a");

  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{formattedDate}</p> {/* Display the formatted date */}
      <p className='order_id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item => (
        <CheckoutProduct
          key={item.id} // Add a key prop for each item
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton // Use this prop to control button visibility
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100} // Assuming amount is in cents
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
