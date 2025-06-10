import { useCart } from '../contexts/CartContext';
import type { Product } from '../types/Product';

function ProductCard(product: Product) {
  let { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text fw-bold">₹{product.price}</p>
        <button className="btn btn-success w-100" onClick={() => addToCart({
          id: product.id,        
          name: product.name,
          category: product.category,
          price: product.price
        })}>Add to Cart 🛒</button>
      </div>
    </div>
  );
}

export default ProductCard;


