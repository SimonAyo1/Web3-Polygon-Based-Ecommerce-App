import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function PayButton({ disabled }) {
  const navigate = useNavigate();
  return (
    <Link to="/payment">
      <button type="button" disabled={disabled} className="addTOCart__btn" onClick={() => { navigate("/payment") }}>
        Make Payment
      </button>
    </Link>
  );
}
