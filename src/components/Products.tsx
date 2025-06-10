import type { Product } from '../types/Product';
import ProductCard from './ProductCard';

const products: Product[] = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 29999 },
  { id: 2, name: 'Bluetooth Headphones', category: 'Electronics', price: 1999 },
  { id: 3, name: 'Wheat Flour (5kg)', category: 'Grocery', price: 250 },
  { id: 4, name: 'Cooking Oil (1L)', category: 'Grocery', price: 160 },
  { id: 5, name: 'Treadmill', category: 'Gym Items', price: 45999 },
  { id: 6, name: 'Yoga Mat', category: 'Gym Items', price: 799 },
  { id: 7, name: "Men's T-Shirt", category: 'Clothing', price: 499 },
  { id: 8, name: 'Jeans', category: 'Clothing', price: 1099 },
  { id: 9, name: 'The Alchemist', category: 'Books', price: 299 },
  { id: 10, name: 'Atomic Habits', category: 'Books', price: 399 },
  { id: 11, name: 'Lipstick Set', category: 'Beauty', price: 599 },
  { id: 12, name: 'Face Moisturizer', category: 'Beauty', price: 349 },
];

function Products() {
  return (
    <div className="p-5 bg-dark">
      <h2 className="mb-4 text-center text-light">Our Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4">
            <ProductCard id={product.id} name={product.name} category={product.category} price={product.price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
