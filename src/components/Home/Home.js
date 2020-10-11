import React from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import withContext from "../../withContext";
import ConceptCatalog from "../ConceptCatalog";
import TagsBlock from "../TagsBlock";
import EmailCallback from "../EmailCallback";

import "./Home.css";
import PriceImg from "../../assets/images/price-block.jpg";
import NewestImg from "../../assets/images/newest.png";
import WomenShoes from '../../assets/images/women_shoes.png';
import MenShoes from '../../assets/images/men_shoes.png';
import SportShoes from '../../assets/images/sport_shoes.png';
import ChildShoes from '../../assets/images/child_shoes.png';
import Accessories from '../../assets/images/accessories.png';

const Home = (props) => {
  const catalog = props.context.catalogs[10];
  const products = props.context.products;
  const { tags } = props.context;
  let filtered = null;

  if (products && catalog) {
    filtered = products.filter((item) =>
      catalog.productsId.includes(+item._id)
    );
  }

  const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1
    };

  return (
    <>
      <br />
      <div className="main-top-panel">
        <ConceptCatalog id="1" title="Кроссовки Sampi">
          <img src={NewestImg} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="6" title="Лучшая цена">
          <img src={PriceImg} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="7" title="Скидки до -40%" catalog colored>
        </ConceptCatalog>
      </div>
      <div className="folders-block">
        <TagsBlock tags={tags} />
        <ConceptCatalog id="1" catalog title="Женская обувь">
          <img src={WomenShoes} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="2" catalog title="Мужская обувь">
          <img src={MenShoes} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="3" catalog title="Спортивная обувь">
          <img src={SportShoes} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="4" catalog title="Детская обувь">
          <img src={ChildShoes} alt="logo" />
        </ConceptCatalog>
        <ConceptCatalog id="5" catalog title="Аксессуары">
          <img src={Accessories} alt="logo" />
        </ConceptCatalog>
      </div>
      <div className="main-section">
        <h3 className="main-section__header">Популярные товары</h3>
            {filtered ? 
              (
              <Slider {...settings}>
                {
                  filtered.map((product, key) => (
                    <div key={key} className="catalog-item">
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
                    </div>
                  ))
                }
            </Slider>
          ) : (
            <div>Loading...</div>
          )}
      </div>
      <EmailCallback></EmailCallback>
    </>
  );
};

export default withContext(Home);
