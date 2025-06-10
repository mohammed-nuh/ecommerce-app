import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function OrderPlaced() {
  const { clearCart } = useCart();
  const address = localStorage.getItem("orderAddress");

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div
      className="d-flex justify-content-center bg-dark align-items-center"
      style={{
        minHeight: "calc(100vh - 126px)",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <div
        className="p-5 rounded-4 shadow text-center w-100"
        style={{
          maxWidth: "500px",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
        }}
      >
        <div className="mb-4">
          <h2 className="text-success fw-bold mb-2">✅ Order Confirmed!</h2>
          <p className="text-muted">
            Thank you for your purchase. Your order is on its way!
          </p>
        </div>

        {address ? (
          <div
            className="text-start p-3 rounded-3 mb-4"
            style={{
              backgroundColor: "#f0f4ff",
              color: "#333",
              borderLeft: "4px solid #0d6efd",
              fontSize: "0.95rem",
            }}
          >
            <strong>Delivery Address:</strong>
            <br />
            {address}
          </div>
        ) : (
          <div className="alert alert-warning">No address found.</div>
        )}

        <Link
          to="/products"
          className="btn btn-primary px-4 py-2 rounded-pill mt-2"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderPlaced;
