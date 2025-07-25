function Footer(){
    return (
        <footer className="py-4 mt-auto bg-light text-dark">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-dark">Copyright &copy; Your Website 2025</div></div>
                    <div className="col-auto">
                        <a className="link-dark small" href="#!">Privacy</a>
                        <span className="text-dark mx-1">&middot;</span>
                        <a className="link-dark small" href="#!">Terms</a>
                        <span className="text-dark mx-1">&middot;</span>
                        <a className="link-dark small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;