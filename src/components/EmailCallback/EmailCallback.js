import React, { useState } from "react";

import "./EmailCallback.css";

const EmailCallback = (props) => {
  const [ isFormVisible, setIsFormVisible ] = useState(false);
  const [ emailValue, setEmailValue ] = useState("");

  const onToggleForm = () => {
    setIsFormVisible(!isFormVisible);
    document.querySelector("html").classList.toggle("modal-open");
  }

  const onInputChange = evt => {
    setEmailValue(evt.target.value);
  }

  const onFormSubmit = evt => {
    evt.preventDefault();
    alert("С вами свяжутся!");
    setEmailValue("");
    onToggleForm();
  }

  return (
    <div className="email-block__outer">
      <div className="email-block">
        <h2>Остались вопросы?</h2>
        <button className="btn" onClick={onToggleForm}>Напишите нам</button>
      </div>
      {isFormVisible ? 
        (
          <>
            <div className="email-cb__outer" onClick={onToggleForm}> 
            </div>
            <fieldset className="email-cb__fieldset">
              <p className="email-header">Остались вопросы?</p>
              <form className="email-form" onSubmit={onFormSubmit}>
                <label>
                  E-mail:
                  <input type="email" value={emailValue} onChange={onInputChange} required /> 
                </label>
                <button type="submit" className="btn">Отправить</button>
              </form>
              <button className="btn-close" onClick={onToggleForm}><i></i><i></i></button>
            </fieldset> 
          </>
        ) : (
          <></>
        )}
    </div>
    
  );
};

export default EmailCallback;
