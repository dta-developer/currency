import React from "react";
import axios from "axios";
import CurrencyReducer from "./CurrencyReducer";
import { createContext, useReducer } from "react";
const CurrencyContext = createContext();
export const CurrencyProvider = ({ children }) => {
  const initialState = {
    currencies: [],
    cur1: "1inch",
    rate: "",
    cur2: "1inch",
  };
  const [state, dispatch] = useReducer(CurrencyReducer, initialState);
  const getCurrencies = () => {
    const baseURL =
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
    axios.get(baseURL).then((response) => {
      const results = response.data;

      const arr = [];
      for (const key in results) {
        arr.push(key);
      }

      dispatch({ type: "GET_CURRENCIES", payload: arr });

      //eslint - disable - next - line;
    });
  };
  const getRate = (cur1, cur2) => {
    const baseURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur1}/${cur2}.json`;
    axios.get(baseURL).then((response) => {
      const rate = response.data[`${cur2}`];
      dispatch({ type: "GET_RATE", payload: rate });

      //eslint - disable - next - line;
    });
  };
  const setCur1 = (cur1) => {
    dispatch({ type: "SET_CUR1", payload: cur1 });
  };
  const setCur2 = (cur2) => {
    dispatch({ type: "SET_CUR2", payload: cur2 });
  };
  return (
    <CurrencyContext.Provider
      value={{
        currencies: state.currencies,
        getCurrencies,
        setCur1,
        setCur2,
        cur1: state.cur1,
        getRate,
        cur2: state.cur2,
        rate: state.rate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
