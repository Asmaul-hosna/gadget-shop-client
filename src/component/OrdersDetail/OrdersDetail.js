import React from 'react';

const OrdersDetail = ({ordersDetail}) => {
  
    return (
        <div>
            <h4>{ordersDetail.ordersName}</h4>
            <p>{ordersDetail.name}</p>
            <p>{ordersDetail.email}</p>
            
        </div>
    );
};

export default OrdersDetail;