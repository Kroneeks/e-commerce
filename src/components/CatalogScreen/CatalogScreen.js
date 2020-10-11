import React from "react";
import { Link } from "react-router-dom";
import withContext from "../../withContext";

import "../ProductScreen/ProductScreen.css";
import "./CatalogScreen.css";

const CatalogScreen = (props) => {
  const catalog = props.context.catalogs[props.match.params.id - 1];
  const products = props.context.products;
  let filtered = null;

  if (products && catalog) {
    filtered = products.filter((item) =>
      catalog.productsId.includes(+item._id)
    );
  }

  return (
    <div>
      {filtered ? (
        <>
          <div className="product-content-block">
            <h3 className="catalog-header">{catalog.title}</h3>
          </div>
          <ul className="catalog-list">
            {
              (
              filtered.map((product, key) => (
                <li key={key} className="catalog-item">
                  <Link to={`/products/${product._id}`}>
                  <img
                    src={require(`../../assets/images/${product.previewUrl}`)}
                    alt={key}
                  />
                  </Link>
                  <div className="catalog-item__info">
                    <p className="product-name">{product.name}</p>
                    <p>{product.companyName}</p>
                    <p className="product-article">
                      Артикул: {product.article}
                    </p>
                    <div className="product-order__price">
                      <span className="current-price">
                        <b>{product.currentPrice}</b> р.
                      </span>
                      <span className="stock-price">
                        <strong>{product.stockPrice}</strong> р.
                      </span>
                    </div>
                    <div
                      className="product-order__is-exist"
                      data-exist={product.stock > 0 ? "true" : "false"}
                    >
                      {product.stock > 0 ? "В наличии!" : "Нет в наличии"}
                    </div>
                  </div>
                </li>
              )))
            }
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default withContext(CatalogScreen);
