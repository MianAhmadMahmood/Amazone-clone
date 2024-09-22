import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../../Firebase';
import { useStateValue } from '../../StateProvider';
import { collection, doc, orderBy, onSnapshot } from 'firebase/firestore'; // Import necessary functions
import Order from '../Order/Order';

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const ordersRef = collection(db, 'users', user?.uid, 'orders'); // Get a reference to the orders collection
            const unsubscribe = onSnapshot(ordersRef, (snapshot) => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            });

            return () => unsubscribe(); // Cleanup subscription on unmount
        } else {
            setOrders([]);
        }
    }, [user]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>   
            <div className='orders_orders'>
                {orders?.map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;
