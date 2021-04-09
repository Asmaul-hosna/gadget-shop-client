import React, { useEffect, useState } from 'react';
import OrdersDetail from '../OrdersDetail/OrdersDetail';



const Orders = () => {
    const [orders,setOrders]= useState([]);

    useEffect(()=>{
        fetch('https://cherry-pudding-96348.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    return (
        <div>
            <h3>Your Order:{orders.length} orders</h3>
            {
               orders.map(ordersDetail=><OrdersDetail ordersDetail={ordersDetail}></OrdersDetail>)
            }
        </div>
    );
};

export default Orders;