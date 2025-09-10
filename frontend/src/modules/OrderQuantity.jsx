import React from 'react';


const OrderQuantity = ({ quantity, onQuantityChange }) => {
    const handleChange = (event) => {
        onQuantityChange(parseInt(event.target.value, 10) || 0);
    };

    return (
        <input
            type="number"
            value={quantity}
            onChange={handleChange}
            min="0"
            max="100"
            style={{ width: '80px' }}
        />
    );
};

export default OrderQuantity;
