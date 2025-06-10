import { Link } from "react-router-dom";

function Navbar(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg brand_bg1 stickyNav">
                <div className="container-fluid">
                    <a className="navbar-brand brand_tc4">Ecommerce App</a>
                    <button className="navbar-toggler brand_bg2 brand_tc2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon brand_bg2 brand_tc4"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link brand_tc4" to='/'>Home</Link>
                            <Link className="nav-link brand_tc4" to='/products'>Products</Link>
                            <Link className="nav-link brand_tc4" to='/cart'>Cart</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;