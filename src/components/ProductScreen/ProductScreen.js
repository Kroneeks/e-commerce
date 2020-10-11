import React, { useState, useEffect } from "react";
import withContext from "../../withContext";

import InputAmount from "../InputAmount";

import "./ProductScreen.css";

const ProductScreen = (props) => {
  const product = props.context.products[props.match.params.id - 1];
  const [hookColor, setColor] = useState(null);
  const [hookSize, setSize] = useState(null);
  const [hookImg, setImg] = useState(0);
  const [amount, setAmount] = useState(0);

  const onColorClick = (evt) => {
    setColor(evt.target.getAttribute("data-color"));
  };

  const onSizeChange = (evt) => {
    setSize(evt.target.selectedOptions[0].getAttribute("data-size"));
  };

  const onImgClick = (evt) => {
    setImg(evt.target.getAttribute("data-img"));
  };

  const addToCart = () => {
    if (amount > 0) {
      props.context.addToCart({ id: product._id, product, name: product.name, amount: amount, color: hookColor, size: hookSize })
    }
  }

  const getAmount = value => {
    setAmount(value);
  }

  useEffect(() => {
    if (product) {
      setColor(product.colors[0]);
      if (product.sizes) setSize(product.sizes[0]);
    }
  }, [product]);

  return (
    <div>
      {product ? (
        <>
          <div className="product-main product-content-block">
            <div className="product-main__media">
              {hookColor ? (
                <div className="product-main__gallery">
                  <img
                    src={require(`../../assets/images/${product.images[hookColor][hookImg]}`)}
                    alt="men-shoes"
                  />
                  <div className="product-main__small-images">
                    {product.images[hookColor].map((imgUrl, key) => (
                      <img
                        onClick={onImgClick}
                        key={key}
                        data-img={key}
                        src={require(`../../assets/images/${imgUrl}`)}
                        alt="men-shoes"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className="product-main__info">
              <h3 className="product-main__title">{product.name}</h3>
              <p>{product.companyName}</p>
              <p>Артикул: {product.article}</p>
              <p>
                Оплата заказа картой после примерки возможна во всех пунктах
                самовывоза
              </p>
              <div className="color-block">
                <p className="color-block__title">Цвет</p>
                <ul>
                  {product.colors.map((color, key) => (
                    <li
                      key={key}
                      data-color={color}
                      onClick={onColorClick}
                      className={`color-block__item ${
                        hookColor === color ? "active" : ""
                      }`}
                    ></li>
                  ))}
                </ul>
              </div>
              {product.sizes ? 
                (
                  <div className="size-block">
                    <label>
                      Размер
                      <select onChange={onSizeChange}>
                        {product.sizes.map((size, key) => (
                          <option key={key} data-size={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                ) : (
                  <div></div>
                )}
              <strong>
                <p>Высота платформы</p> {product.platformHeight ? product.platformHeight : "-"}
              </strong>
              <strong>
                <p>Размерность</p> {product.dimension ? product.dimension : "-"}
              </strong>
              <strong>
                <p>Материал подкладки</p> {product.material ? product.material : "-"}
              </strong>
              <strong>
                <p>Состав</p> {product.composition ? product.composition : "-"}
              </strong>
            </div>
          </div>
          <div className="product-order product-content-block">
            <div className="product-order__info">
              <div className="product-order__price">
                <span className="current-price">
                  <b>{product.currentPrice}</b> р.
                </span>
                <span className="stock-price">
                  <strong>{product.stockPrice}</strong> р.
                </span>
                <div
                  className="product-order__is-exist"
                  data-exist={product.stock > 0 ? "true" : "false"}
                >
                  {product.stock > 0 ? "В наличии!" : "Нет в наличии"}
                </div>
              </div>
              <div className="product-order__additional-btns">
                <InputAmount id={product._id} getAmount={getAmount} />
              </div>
            </div>
            <div>
              <button className="btn btn__to-cart" onClick={addToCart}>В корзину</button>
              <button className="btn btn__fast-order">Быстрый заказ</button>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default withContext(ProductScreen);
