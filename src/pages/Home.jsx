import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/shopping-cart-tp.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/electronics.png";
import foodCategoryImg02 from "../assets/images/fashion.png";
import foodCategoryImg03 from "../assets/images/grocery.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { NotificationContainer } from "react-notifications";
import "react-notifications/dist/react-notifications.css";

const featureData = [
  {
    title: "Connect Wallet",
    imgUrl: featureImg01,
    desc: "Connect your wallet with metamask or any web3 provider of your choice",
  },

  {
    title: "Shop",
    imgUrl: featureImg02,
    desc: "Add the products you wish to buy to the cart, and checkout",
  },
  {
    title: "Sign Tx",
    imgUrl: featureImg03,
    desc: "Approve transaction on your wallet to place your order, and that's all !",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [Fashion, setFashion] = useState([]);

  useEffect(() => {
    const filteredFashion = products.filter(
      (item) => item.category === "Fashion"
    );
    const sliceFashion = filteredFashion.slice(0, 4);
    setFashion(sliceFashion);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Electronics") {
      const filteredProducts = products.filter(
        (item) => item.category === "Electronics"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Fashion") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fashion"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Grocery") {
      const filteredProducts = products.filter(
        (item) => item.category === "Grocery"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <NotificationContainer />
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">🛒 USDT, BUSD, USDC, DAI</h5>
                <h1 className="mb-4 hero__title">
                  <span>Need To Buy ?</span> Connect <br /> Your Wallet
                  <span> And Be Glad !</span>
                </h1>

                <p>
                  We are Arike Store, and we have your best interest at mind, if
                  you ever need to get a product just connect your wallet and
                  buy with those usdt !
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <Link to="/products">

                    <button className="order__btn d-flex align-items-center justify-content-between">
                      Start Ordering<i class="ri-arrow-right-s-line"></i>
                    </button>
                  </Link>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">How It Works</h5>
              <h2 className="feature__title">No need for</h2>
              <h2 className="feature__title">
                a <span>third party in your transactions</span>
              </h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Trending Products</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${category === "ALL" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === "Electronics" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("Electronics")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Electronics
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "Fashion" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("Fashion")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Fashion
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${category === "Grocery" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("Grocery")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Groceries
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src="https://img.freepik.com/premium-vector/people-supermarket-grocery-flat-vector-illustration-cartoon-characters_580420-680.jpg?w=740"
                alt="why-tasty-treat"
                className="w-100"
              />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Arike Store?</span>
                </h2>
                <p className="tasty__treat-desc">
                  We are the bridge between the blockchain of e-commerce and You
                  !
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Secured And
                      Transparent Transactions
                    </p>
                    <p className="choose__us-desc">
                      Because we have implemented blockchain technology, you
                      don't need to think about fraud
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> No Third Parties
                    </p>
                    <p className="choose__us-desc">
                      You don't need any third party payment gateways, no
                      intermediaries !
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Quality Support
                    </p>
                    <p className="choose__us-desc">
                      Don't forget we always got you covered !.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Fashion For The Week</h2>
            </Col>

            {Fashion.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Read what people say about Chain-Mart!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img
                src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?w=740&t=st=1665352262~exp=1665352862~hmac=fdfd213a87a6e8acd3f00ec15d708fb9c0b41467d3dc8f16b29526fea5809e02"
                alt="testimonial-img"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
