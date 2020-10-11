import React, { useState, useEffect } from "react";
import withContext from "../../withContext";

import "./Coupon.css";

const Coupon = (props) => {
  const { dataCoupons } = props.context;
  const { onCouponToggle } = props;
  const [isCouponAdding, setCouponAdding] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [value, setValue] = useState("");

  const toggleCoupon = () => {
    setCouponAdding(!isCouponAdding);
  };

  const addCoupon = () => {
    const found = coupons.find(item => item.value === value);

    if (found === undefined && coupons.length < 5) {
      setCoupons((coupons) => [
        ...coupons,
        { value: value, access: dataCoupons.includes(value) },
      ]);
    }
  };

  const removeCoupon = (evt) => {
    setCoupons(
      coupons.filter(
        (coupon) => coupon.value !== evt.target.getAttribute("data-key")
      )
    );
  };

  useEffect(() => {
    onCouponToggle(coupons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCouponAdding, coupons]);

  return (
    <>
      {!isCouponAdding ? (
        <button className="btn btn-coupon" onClick={toggleCoupon}>
          +
        </button>
      ) : (
        <>
          <span className="add-coupon-block">
            <input
              type="text"
              onChange={(evt) => {
                setValue(evt.target.value);
              }}
              value={value}
              className="coupon-input"
            />
            <button
              className="btn btn__coupon btn__add-coupon"
              onClick={addCoupon}
            >
              +
            </button>
            <button
              className="btn btn__coupon btn__close-coupon"
              onClick={toggleCoupon}
            >
              ×
            </button>
          </span>
        </>
      )}
      {coupons && coupons.length ? (
        <span className="used-coupons-block">
          <span className="list-coupons__header">Использованные:</span>
          <span className="list-coupons">
            {coupons.map((coupon, key) => (
              <span
                key={key}
                className={`list-coupons__item ${
                  coupon.access ? "" : "incorrect"
                }`}
              >
                <span>{coupon.value}</span>
                <button
                  className="btn btn__remove-coupon"
                  data-key={coupon.value}
                  onClick={removeCoupon}
                >
                  ×
                </button>
              </span>
            ))}
          </span>
        </span>
      ) : (
        <></>
      )}
    </>
  );
};

export default withContext(Coupon);
