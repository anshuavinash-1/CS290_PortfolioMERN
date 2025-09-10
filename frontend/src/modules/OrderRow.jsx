import React from 'react';
import OrderQuantity from './OrderQuantity'; // or use the existing path

const OrderRow = ({ item, onQuantityChange, calculateSubtotal }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
                <OrderQuantity
                    quantity={item.quantity}
                    onQuantityChange={onQuantityChange}
                />
            </td>
            <td>${calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
        </tr>
    );
};

export default OrderRow;
