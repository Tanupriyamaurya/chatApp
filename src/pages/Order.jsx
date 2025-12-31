import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Divider, Chip } from "@mui/material";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          No Orders Found
        </Typography>
        <Typography color="text.secondary">
          You haven’t placed any orders yet.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>

      {orders.map((order, index) => (
        <Card key={order.id || index} sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">
                Order #{order.id || index + 1}
              </Typography>
              <Chip
                label={order.status || "Placed"}
                color={
                  order.status === "Delivered"
                    ? "success"
                    : order.status === "Cancelled"
                    ? "error"
                    : "primary"
                }
              />
            </Box>

            <Typography variant="body2" color="text.secondary">
              Ordered on:{" "}
              {order.createdAt
                ? new Date(order.createdAt).toLocaleDateString()
                : "N/A"}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Items */}
            {order.items?.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography>{item.title}</Typography>
                <Typography>
                  ₹{item.price} × {item.quantity}
                </Typography>
              </Box>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* Total */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="bold">Total Amount</Typography>
              <Typography fontWeight="bold">
                ₹{order.totalAmount}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Order;
