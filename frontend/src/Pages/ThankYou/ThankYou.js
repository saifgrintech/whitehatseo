import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const ThankYou = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1); // Go back to the previous page after 5 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <>
    <Navbar />
    <div style={styles.wrapper} id="thankyouCard" >
      <div style={styles.box} >
      <img src={`${WEBSITE_URL}/images/tick.webp`} style={{ width: "130px" }} alt='logo'></img>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.message}>Your form has been submitted successfully.</p>
        <Link to="/" style={styles.button}>
          Go back to Home
        </Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    backgroundColor: "#f0f8ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"100px"
  },
  box: {
    backgroundColor: "#fff",
    padding: "40px",
    margin: "40px 0",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    minWidth: "300px",
  },
  heading: {
    color: "#0d96de",
    marginBottom: "20px",
    fontSize: "30px"
  },
  message: {
    color: "#333",
    fontSize: "1.1rem",
  },
  button: {
    marginTop: "20px",
    display: "inline-block",
    textDecoration: "none",
    background: "linear-gradient(90deg, rgb(15, 153, 226) -11%, rgb(4, 84, 127) 0px, rgb(15, 153, 226))",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    transition: "0.3s ease",
  },
};

export default ThankYou;
