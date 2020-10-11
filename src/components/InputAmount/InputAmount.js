import React, { useState, useEffect } from "react";
import withContext from "../../withContext";

import "./InputAmount.css";

const InputAmount = (props) => {
  const product = props.context.products[props.id - 1];
  const [count, setCount] = useState(1);
  const [maxCount, setMaxCount] = useState(2);
  const { getAmount } = props;

  const onInputChange = (evt) => {
    const { value } = evt.target;

    if (isFinite(value)) {
      if (value > 0 && value <= maxCount) {
        setCount(+evt.target.value);
      }
    }
  };

  const onMinusClick = (evt) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onPlusClick = (evt) => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (product) {
      setMaxCount(product.stock);
    }
    if (product.stock < 1) setCount(0);
    getAmount(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, count]);

  return (
    <div className="amount-block">
      <button
        className="btn-amount"
        onClick={onMinusClick}
        disabled={count <= 1? "disabled" : ""}
      >
        -
      </button>
      <input type="text" value={count} onChange={onInputChange} />
      <button
        className="btn-amount"
        onClick={onPlusClick}
        disabled={count === maxCount ? "disabled" : ""}
      >
        +
      </button>
    </div>
  );
};

export default withContext(InputAmount);
