import React from "react";
import "./App.css";
import { Headers, Balance, Transaction, AddTransaction } from "./component";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Headers />
      <Balance />
      <Transaction />
      <AddTransaction />
    </Provider>
  );
};

export default App;
