import React, { useState } from 'react';
import OrderRow from './OrderRow'; // Adjust the import path as necessary
import Footer from './Footer';

const OrderPage = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', price: 10.00, quantity: 1 },
        { id: 2, name: 'Item 2', price: 15.50, quantity: 2 },
        { id: 3, name: 'Item 3', price: 7.25, quantity: 3 },
        { id: 4, name: 'Item 4', price: 20.00, quantity: 1 },
    ]);

    const handleQuantityChange = (index, newQuantity) => {
        const updatedItems = [...items];
        updatedItems[index].quantity = newQuantity;
        setItems(updatedItems);
    };

    const calculateSubtotal = (price, quantity) => price * quantity;

    const getTotal = () => {
        return items.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0);
    };

    const handleOrder = () => {
        // Implement the order submission logic here
        alert('Order has been placed successfully!');
    };

    return (
        <div className='main'>
            <h1>Order Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <OrderRow
                            key={index}
                            item={item}
                            onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                            calculateSubtotal={calculateSubtotal}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>${getTotal().toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>

            {/* Order Button */}
            <button className='user-button' onClick={handleOrder}>Place Order</button>

            <Footer />
        </div>
    );
};

export default OrderPage;