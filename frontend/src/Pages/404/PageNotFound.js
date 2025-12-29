import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PageNotFound = () => {
  return (
    <>
      <Navbar />

      <div
        className="d-flex flex-column align-items-center justify-content-center min_height"
        style={{
          textAlign: "center",
          padding: "100px 20px 40px 20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "700",
              color: "#0d96de",
              lineHeight: "1",
            }}
          >
            404
          </h1>

          <h3 className="mt-3 mb-3" style={{ color: "#333" }}>
            Oops! Page not found
          </h3>

          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto", fontSize:"17px" }}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="btn btn-primary mt-4"
            style={{
              padding: "10px 25px",
              borderRadius: "30px",
              backgroundColor: "#0d96de",
              border: "none",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNotFound;
