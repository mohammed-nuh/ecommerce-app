import { Link } from "react-router-dom";

const categories = [
  { name: 'Electronics', icon: 'bi-tv' },
  { name: 'Grocery', icon: 'bi-basket' },
  { name: 'Gym Items', icon: 'bi-lightning-charge' },
  { name: 'Clothing', icon: 'bi-person' },
  { name: 'Books', icon: 'bi-book' },
  { name: 'Beauty', icon: 'bi-heart' },
];

function Home() {
  return (
    <div className="p-5 bg-dark text-white min-vh-100">
      <h1 className="mb-4 text-center">Welcome to Our Store</h1>
      <p className="text-center mb-5">Explore categories below:</p>

      <div className="row g-4">
        {categories.map((cat) => (
          <div key={cat.name} className="col-6 col-md-4">
            <div className="card h-100 text-center bg-secondary text-white shadow-sm">
              <div className="card-body">
                <i className={`bi ${cat.icon} fs-1 mb-3`}></i>
                <h5 className="card-title">{cat.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/products" className="btn btn-outline-light btn-lg">
          Go to Products Page →
        </Link>
      </div>
    </div>
  );
}

export default Home;
