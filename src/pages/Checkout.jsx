import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import PayButton from "../web3/PayButton";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  // Function to check if the form is valid
  const isFormValidF = () => {
    return (
      enterName.trim() !== "" &&
      enterEmail.trim() !== "" &&
      enterNumber.trim() !== "" &&
      enterCountry.trim() !== "" &&
      enterCity.trim() !== "" &&
      postalCode.trim() !== ""
    );
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => {
                      setEnterName(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => {
                      setEnterEmail(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    onChange={(e) => {
                      setEnterNumber(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => {
                      setEnterCountry(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => {
                      setEnterCity(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                      setIsFormValid(isFormValidF());
                    }}
                  />
                </div>
                <PayButton disabled={!isFormValid} /> {/* Disable button based on form validity */}
              </form>
            </Col>




            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>{cartTotalAmount} USDT</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>{shippingCost} USDT</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>{totalAmount} USDT</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
