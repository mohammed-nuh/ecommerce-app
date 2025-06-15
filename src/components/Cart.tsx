import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <div className="bg-black text-white p-4 rounded shadow">
        <h2 className="mb-4 text-center">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="alert alert-warning text-center">Your Cart is Empty</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.map((cartItem, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center bg-white text-dark"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      className="rounded"
                    />
                    <div>
                      <h5 className="mb-1">{cartItem.name}</h5>
                      <small className="text-muted d-block">{cartItem.category}</small>
                      <small>Quantity: {cartItem.quantity}</small>
                    </div>
                  </div>
                  <span className="fw-bold">₹{cartItem.price * cartItem.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-row justify-content-between align-items-center">
              <h4 className="mb-0">Total: ₹{total}</h4>
              <Link to="/address">
                <button className="btn btn-success">Proceed to Address</button>
              </Link>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
