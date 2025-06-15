import type { Product } from '../types/Product';
import ProductCard from './ProductCard';

import smartphoneImg from '../assets/smartphone.avif';
import headphonesImg from '../assets/headphones.jpg';
import flourImg from '../assets/flour.webp';
import oilImg from '../assets/oil.webp';
import treadmillImg from '../assets/treadmill.jpg';
import yogaMatImg from '../assets/yoga-mat.webp';
import tshirtImg from '../assets/tshirt.webp';
import jeansImg from '../assets/jeans.jpg';
import alchemistImg from '../assets/alchemist.jpg';
import atomicHabitsImg from '../assets/atomic-habits.jpg';
import lipstickImg from '../assets/lipstick.webp';
import moisturizerImg from '../assets/moisturizer.avif';

const products: Product[] = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 29999, image: smartphoneImg },
  { id: 2, name: 'Bluetooth Headphones', category: 'Electronics', price: 1999, image: headphonesImg },
  { id: 3, name: 'Wheat Flour (5kg)', category: 'Grocery', price: 250, image: flourImg },
  { id: 4, name: 'Cooking Oil (1L)', category: 'Grocery', price: 160, image: oilImg },
  { id: 5, name: 'Treadmill', category: 'Gym Items', price: 45999, image: treadmillImg },
  { id: 6, name: 'Yoga Mat', category: 'Gym Items', price: 799, image: yogaMatImg },
  { id: 7, name: "Men's T-Shirt", category: 'Clothing', price: 499, image: tshirtImg },
  { id: 8, name: 'Jeans', category: 'Clothing', price: 1099, image: jeansImg },
  { id: 9, name: 'The Alchemist', category: 'Books', price: 299, image: alchemistImg },
  { id: 10, name: 'Atomic Habits', category: 'Books', price: 399, image: atomicHabitsImg },
  { id: 11, name: 'Lipstick Set', category: 'Beauty', price: 599, image: lipstickImg },
  { id: 12, name: 'Face Moisturizer', category: 'Beauty', price: 349, image: moisturizerImg },
];

function Products() {
  return (
    <div className="p-5 bg-dark">
      <h2 className="mb-4 text-center text-light">Our Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-3">
            <ProductCard
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
