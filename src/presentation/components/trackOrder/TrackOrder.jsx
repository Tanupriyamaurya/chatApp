import React, { useEffect, useState } from "react";
import "./TrackOrder.css";
import { ORDER_STATUS_STEPS } from "../../../data/staticData";

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);

const steps = ORDER_STATUS_STEPS;

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);
  const createTestOrder = () => {
    const testOrder = {
      orderId: "ORD" + Date.now(),
      orderDate: new Date().toISOString(),
      status: "Order Placed",
      totalAmount: 999,
      items: [
        { title: "Test Book 1", quantity: 1 },
        { title: "Test Book 2", quantity: 2 }
      ]
    };

    const updatedOrders = [...orders, testOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  return (
    <div className="track-order-container">
      <h2>My Orders</h2>


      <button
        onClick={createTestOrder}
        style={{ marginBottom: "20px" }}
      >
        Create Test Order
      </button>
      {orders.length === 0 && (
        <h3 style={{ textAlign: "center" }}>No orders found</h3>
      )}

      {orders.map((order) => (
        <div key={order.orderId} className="order-card">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Date:</strong> {new Date(order.orderDate).toDateString()}</p>
          <div className="progress-wrapper">
  <div className="progress-line"></div>

  <div className="progress-steps">
    {steps.map((step, index) => {
      const isActive = steps.indexOf(order.status) >= index;

      return (
        <div key={step} className="step">
          <div className={`circle ${isActive ? "active" : ""}`}>
            {index + 1}
          </div>
          <span className={`label ${isActive ? "active" : ""}`}>
            {step}
          </span>
        </div>
      );
    })}
  </div>
</div>



          <p>
            <strong>Status:</strong>
            <span className="status"> {order.status}</span>
          </p>

          <h4>Items:</h4>
          {order.items.map((item, index) => (
            <p key={index}>
              {item.title} × {item.quantity}
            </p>
          ))}

          <p><strong>Total:</strong> ₹{order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrackOrder;
