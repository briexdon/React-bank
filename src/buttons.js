import "./App.css";

const Btn = ({ currency, onConvert }) => {
  return (
    <button currency={currency} onClick={onConvert}>
      {currency}
    </button>
  );
};

const Buttons = ({ onConvert }) => {
  const currency = ["USD", "EUR", "PLN", "JPY"];

  const renderButtons = (curr, onConvert) => {
    const res = [];

    const transformCurr = curr.map((elem, i) => (
      <Btn key={i} currency={elem} onConvert={onConvert} />
    ));

    // for (let i = 0; i < currency.length; i++) {
    //   let btn = <Btn key={i} currency={currency[i]} onConvert={onConvert} />;
    //   btns.push(btn);
    // }
    res.push(transformCurr);
    console.log(transformCurr);

    return res;
  };

  return <>{renderButtons(currency, onConvert)}</>;
};

export default Buttons;
