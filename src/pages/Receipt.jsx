import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import "../styles/receipt.css";
export default function Receipt() {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const account = useSelector((state) => state.account.account);
  const { coin, address } = useParams()

  const date = new Date
  return (
    <>
      <div style={{ marginBottom: 300 }}></div>
      <div style={{ marginTop: 200, paddingTop: 200 }}>
        <div class="cc">
          <div class="receipt_box">
            <div class="head">
              <div class="logo">
                <img src="https://img.freepik.com/premium-vector/elephant-head-illustration-icon-brand-isolated_7109-301.jpg?w=740" />
                <p>Arike Store</p>
              </div>
              <div class="number">
                <div class="date">{date.toLocaleDateString()}</div>
                <div class="ref">{date.toLocaleTimeString()}</div>
              </div>
            </div>
            <div class="body">
              <div class="info">
                <div class="welcome">
                  Hi, <span class="username">{account}</span>
                </div>
                <p>You've purchased {cart.length} item(s) from our store</p>
              </div>
              <div class="c">
                <div class="title">Product(s)</div>
                <div class="content">
                  <ul class="c_list">
                    {cart.map((e) => (
                      <li class="c_item" key={e.id}>
                        <div style={{ marginLeft: -20 }}>
                          <img
                            style={{ height: 30, width: 30 }}
                            src={e.image01}
                          />
                        </div>
                        <span style={{ marginLeft: 20 }} class="name">
                          <b>{e.title}</b>
                        </span>
                        <span class="price">
                          {e.price} X {e.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div class="total">
                    <span>total</span>
                    <span class="total_price">
                      {totalAmount} {coin}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="foot">
              <a href={`https://mumbai.polygonscan.com/address/${address}`} target="blank">
                <Button color="warning">Verify On Polygonscan</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 200 }}></div>
    </>
  );
}
