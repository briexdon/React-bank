import React, { useState, useEffect } from "react";
import getResource from "../src/services/appService";

import Buttons from "./buttons";
import "./App.css";

const Form = (props) => {
  // поточна вибрана валюта
  const [currentCurrency, setCurrentCurrency] = useState(0);

  // масив всіх валют
  const [currencyArr, setCurrency] = useState();

  useEffect(() => getCurrency(getResource), []);

  const getCurrency = (arr) => {
    arr().then((response) => setCurrency(response));
  };

  // функція вибору валюти з стейта при кліці
  const chooseCurrency = (e) => {
    const cc = e.currentTarget.getAttribute("currency");

    const choose = currencyArr.find((elem) => {
      if (elem.cc === cc) {
        return elem;
      }
    });

    setCurrentCurrency(() => choose.rate);
  };
  return (
    <div className="app">
      <div className="counter">
        {currentCurrency === 0 ? 0 : (currentCurrency * props.UAH).toFixed(2)}
      </div>
      <div className="controls">
        <Buttons onConvert={(e) => chooseCurrency(e)} />
      </div>
    </div>
  );
};

function App() {
  return <Form UAH={10} />;
}

export default App;
