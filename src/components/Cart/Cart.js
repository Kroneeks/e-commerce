import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem";
import withContext from "../../withContext";
import Coupon from "../Coupon";

import "../ProductScreen/ProductScreen.css";
import "./Cart.css";
import NoItemImage from "../../assets/images/no-item-in-cart.png";

const Cart = (props) => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  const [sum, setSum] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (cartKeys && cartKeys.length) {
      let preSum = 0;
      const cartInArray = Object.assign(
        [{ product: { currentPrice: 0 }, amount: 1 }],
        cart
      );
      cartInArray.map((item) => {
        preSum += item.product.currentPrice * item.amount;
        return 0;
      });
      setSum(preSum);
    }
  }, [cart, cartKeys, sum]);

  const onCouponToggle = (coupons) => {
    let preDiscount = 0;
    coupons.map((item) => {
      if (item.access) {
        preDiscount += 10;
      }
      return 0;
    });
    setDiscount(preDiscount);
  };

  return (
    <>
      <div className="product-content-block">
        <h3 className="catalog-header">Корзина</h3>
      </div>
      {cartKeys.length ? (
        <div className="cart-outer">
          <div className="cart-container">
            <div className="cart-container__header">
              <div>Товар</div>
              <div>Цена</div>
              <div>Кол-во</div>
              <div>Сумма</div>
              <div></div>
            </div>
            {cartKeys.map((key) => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <button
              onClick={props.context.clearCart}
              className="btn btn-clear-cart"
            >
              Очистить
            </button>
          </div>
          <div className="cart-calculation">
            <h3 className="cart-calculation__header">Расчет</h3>
            <div className="cart-calculation__info">
              <div className="cart-calculation__info-header">
                <p>Сумма:</p>
                <p>Купон:</p>
                <p>Скидка с купона:</p>
                <p>В том числе НДС 10%:</p>
              </div>
              <div className="cart-calculation__info-body">
                <p className="calculation-body-text">
                  <span>{sum}</span> р.
                </p>
                <p>
                  <Coupon onCouponToggle={onCouponToggle} />
                </p>
                <p className="calculation-body-text">
                  <span>{(sum / 100) * discount}</span> р.
                </p>
                <p className="calculation-body-text">
                  <span>{sum / 10}</span> р.
                </p>
              </div>
              <div className="cart-calculation__result">
                <p className="calculation-result-text">Итого:</p>
                <p className="calculation-body-text calculation-result-text">
                  <span>{sum + sum / 10 - (sum / 100) * discount}</span> р.
                </p>
              </div>
              <Link to="/delivery" className="btn btn-pay">
                Офоромить заказ
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-item-in-cart-outer">
          <img
            src={NoItemImage}
            alt="No item in cart"
            width="400px"
          />
        </div>
      )}
    </>
  );
};

export default withContext(Cart);
