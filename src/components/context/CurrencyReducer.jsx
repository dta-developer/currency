const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case "GET_CURRENCIES":
      return { ...state, currencies: action.payload };
    case "SET_CUR1":
      return { ...state, cur1: action.payload };
    case "SET_CUR2":
      return { ...state, cur2: action.payload };
    case "GET_RATE":
      return { ...state, rate: action.payload };
    default:
      return state;
  }
};
export default CurrencyReducer;
