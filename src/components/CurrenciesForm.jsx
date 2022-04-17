import React from "react";
import Currencies from "./Currencies";
import { useState, useContext, useEffect } from "react";
import classes from "./css/CurrenciesForm.module.css";
import CurrencyContext from "./context/CurrencyContext";
import svglogo from "./convertarrow.svg";
function CurrenciesForm() {
  const { getRate, cur1, cur2, rate, setCur1, setCur2 } =
    useContext(CurrencyContext);

  const [value, setValue] = useState("");
  const [convertvalue, setConvertValue] = useState("");
  useEffect(() => {
    getRate(cur1, cur2);
    setConvertValue(value * rate);
  }, [cur1, cur2, value, rate]);

  const getValue = (event) => {
    setValue(event.target.value);
  };
  const Swap = (event) => {
    event.preventDefault();
    setCur1(cur2);
    setCur2(cur1);
  };
  return (
    <>
      <div className="container">
        <h1 className={classes["title-app"]}>Currency Convert</h1>
        <form className={classes["form-container"]}>
          <div className={classes["container-from"]}>
            <Currencies
              onGetValue={cur1}
              onChangeCurrency={(e) => {
                setCur1(e.target.value);
              }}
            />

            <input
              name="currencies1"
              onChange={getValue}
              type="number"
              className={classes["number-input"]}
            />
          </div>

          <button className="btn" onClick={Swap}>
            <img src={svglogo} className={classes["svg-logo"]} />
          </button>
          <div className={classes["container-to"]}>
            <Currencies
              onGetValue={cur2}
              onChangeCurrency={(e) => {
                setCur2(e.target.value);
              }}
            />
            <input
              type="number"
              name="currencies2"
              className={classes["number-input"]}
              value={convertvalue}
              readOnly
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CurrenciesForm;
