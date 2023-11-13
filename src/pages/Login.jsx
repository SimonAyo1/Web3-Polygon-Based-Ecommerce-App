import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login With Your Wallet">
      <CommonSection title=" Login With Your Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <button className="all__foods-btn">Connect Wallet</button>
              {/* <Link to="/register">
                Don't have an account? Create an account
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
