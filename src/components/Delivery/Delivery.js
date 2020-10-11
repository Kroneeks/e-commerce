import React, { useState } from "react";
import withContext from "../../withContext";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale";

import "../ProductScreen/ProductScreen.css";
import "react-datepicker/dist/react-datepicker.css";
import "../Delivery/Delivery.css";

registerLocale("ru", ru);

const Delivery = (props) => {
	const {checkout} = props.context;
  const [activeTab, setActiveTab] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [usn, setUsn] = useState("");
  const [address, setAddress] = useState("");
  const [postIdx, setPostIdx] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const onTabButtonClick = (evt) => {
    setActiveTab(+evt.target.getAttribute("data-tab"));
  };

  const onSubmit = () => {
    if (activeTab === 0 && usn.length && address.length && postIdx.length) {
      setUsn("");
      setAddress("");
      setPostIdx("");
      setPhone("");
	  alert("Заказ оформлен");
	  checkout();
    } else if (activeTab === 1 && address.length && phone.length) {
      setStartDate(new Date());
      setAddress("");
      setPhone("");
      alert("Заказ оформлен");
	  checkout();
	} else if (activeTab === 2) {
      alert("Заказ оформлен");
	  checkout();
	} else {
		alert("Заполните все обязательные поля и повторите попытку");
	}
  };

  return (
    <div className="delivery-container">
      <div className="product-content-block">
        <h3 className="catalog-header">Доставка</h3>
      </div>
      <div className="accordion-outer">
        <button
          className={`accordion ${activeTab === 0 ? "active" : ""}`}
          data-tab="0"
          onClick={onTabButtonClick}
        >
          Почта - бесплатно
        </button>
        <div className={activeTab === 0 ? "tab" : "panel"}>
          <div className="tab__content">
            <label>
              <span className="required">ФИО</span>
              <input
                type="text"
                value={usn}
                onChange={(evt) => {
                  setUsn(evt.target.value);
                }}
              />
            </label>
            <label>
              <span className="required">Адрес доставки</span>
              <input
                type="text"
                value={address}
                onChange={(evt) => {
                  setAddress(evt.target.value);
                }}
              />
            </label>
            <label>
              <span className="required">Почтовый индекс</span>
              <input
                type="text"
                value={postIdx}
                onChange={(evt) => {
                  setPostIdx(evt.target.value);
                }}
              />
            </label>
            <label>
              <span>Номер телефона</span>
              <input
                type="text"
                value={phone}
                onChange={(evt) => {
                  setPhone(evt.target.value);
                }}
              />
            </label>
          </div>
        </div>

        <button
          className={`accordion ${activeTab === 1 ? "active" : ""}`}
          data-tab="1"
          onClick={onTabButtonClick}
        >
          Курьер - 15 р.
        </button>
        <div className={activeTab === 1 ? "tab" : "panel"}>
          <div className="tab__content">
            <label>
              <span className="required">Адрес доставки</span>
              <input
                type="text"
                value={address}
                onChange={(evt) => {
                  setAddress(evt.target.value);
                }}
              />
            </label>
            <label>
              <span className="required">Номер телефона</span>
              <input
                type="text"
                value={phone}
                onChange={(evt) => {
                  setPhone(evt.target.value);
                }}
              />
            </label>
            <label>
              <span className="required">Дата доставки</span>
              <DatePicker
                locale="ru"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
          </div>
        </div>

        <button
          className={`accordion ${activeTab === 2 ? "active" : ""}`}
          data-tab="2"
          onClick={onTabButtonClick}
        >
          Самовывоз - бесплатно
        </button>
        <div className={activeTab === 2 ? "tab" : "panel"}>
          <div className="tab__content">
            <label>
              <span>Дополнительный комментарий</span>
              <textarea
                value={comment}
                onChange={(evt) => {
                  setComment(evt.target.value);
                }}
              ></textarea>
            </label>
          </div>
        </div>
      </div>
      <button className="btn btn-pay btn-finish-pay" onClick={onSubmit}>
        Оформить заказ
      </button>
    </div>
  );
};
export default withContext(Delivery);
