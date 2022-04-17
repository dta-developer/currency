import React from "react";
import Selection from "./Selection";
import { useEffect, useContext } from "react";
import CurrencyContext from "./context/CurrencyContext";
import classes from "./css/Currencies.module.css";

function Currencies({ onGetValue, onChangeCurrency }) {
  const { currencies, getCurrencies } = useContext(CurrencyContext);

  useEffect(() => {
    getCurrencies();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {
        <select
          onChange={onChangeCurrency}
          value={onGetValue}
          className={classes["dropdown-currency"]}
        >
          {currencies.map((item, index) => (
            <Selection key={index} currency={item} />
          ))}
        </select>
      }
    </div>
  );
}

export default Currencies;
