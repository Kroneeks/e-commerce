import React from "react";
import { Link } from "react-router-dom";

import "./CartItem.css";

export const CartItem = (props) => {
  const { cartItem, cartKey } = props;
  const { product, amount } = cartItem;

  return (
    <div className="cart-container__item">
      <div className="cart-item__media">
        <Link to={`/products/${product._id}`}>
          <img
            src={require(`../../assets/images/${product.previewUrl}`)}
            width="64px"
            alt="logo"
          />
        </Link>
          {product.name}{" "}
      </div>
      <div className="cart-item__price">
        <span>{product.currentPrice}</span> р.
      </div>
      <div className="cart-item__amount">{amount}</div>
      <div className="cart-item__sum">
        <span>{product.currentPrice * amount}</span> р.
      </div>
      <div
        className="cart-item__remove"
        onClick={() => props.removeFromCart(cartKey)}
      >
        <span className="delete is-large"></span>
      </div>
    </div>
  );
};
