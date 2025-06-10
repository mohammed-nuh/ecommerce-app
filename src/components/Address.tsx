import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Address() {
    const [address, setAddress] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleProceed = async () => {
        if (!address.trim()) {
            setError(true);
            setSuccess(false);
        } else {
            setError(false);
            setSuccess(true);
            localStorage.setItem("orderAddress", address);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            navigate('/orderplaced')
        }
    };

    return (
        <div
            className="bg-black text-white d-flex justify-content-center align-items-center"
            style={{ minHeight: "calc(100vh - 126px)", margin: 0 }}
        >
            <div className="bg-dark p-4 rounded w-100" style={{ maxWidth: "500px" }}>
                <h2 className="mb-3 text-center">📦Enter Delivery Address</h2>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        Please enter a valid address.
                    </div>
                )}

                {success && (
                    <div className="alert alert-success" role="alert">
                        Address saved successfully!
                    </div>
                )}

                <textarea
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control mb-3"
                    placeholder="Type your address here..."
                />

                <button onClick={handleProceed} className="btn btn-primary w-100">
                    Proceed to Buy
                </button>
            </div>
        </div>
    );
}

export default Address;
