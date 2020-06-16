import React, { useState } from "react";
import styles from "./AddTransaction.module.css";
import cx from "classnames";
import { connect } from "react-redux";
import { addTrans } from "../../redux/actions/transAction";
import { v4 as uuid } from "uuid";

const AddTransaction = ({ addTrans }) => {
  const [nameError, setNameError] = useState(false);
  const [name, setName] = useState("");

  const [typeError, setTypeError] = useState(false);
  const [type, setType] = useState("");

  const [amountError, setAmountError] = useState(false);
  const [amount, setAmount] = useState("");

  const handleText = (e) => {
    if (e.target.value.trim() === "") {
      setName("");
      setNameError(true);
    } else {
      setName(e.target.value);
      setNameError(false);
    }
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleAmount = (e) => {
    if (e.target.valueAsNumber === 0) {
      setAmountError(true);
    } else {
      setAmountError(false);
      setAmount(e.target.valueAsNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && type) {
      const newTrans = {
        id: uuid(),
        name,
        amount: type === "income" ? amount : amount * -1,
      };

      addTrans(newTrans);

      setName("");
      setAmount("");
      setType("");
    } else {
      if (!name) {
        setNameError(true);
      }
      if (!amount) {
        setAmountError(true);
      }
      if (!type) {
        setTypeError(true);
      }
    }
  };

  return (
    <div>
      <h3 className={styles.header}>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.labels}>Text</label>
          <span className={cx(styles.error, nameError ? styles.errShow : null)}>
            Please enter a text
          </span>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter text..."
            value={name}
            onChange={handleText}
          />
        </div>
        <div>
          <label className={styles.labels}>Amount</label>
          <span className={cx(styles.error, typeError ? styles.errShow : null)}>
            Please select amount type
          </span>
          <div className={styles.radio}>
            <input
              type="radio"
              name="type"
              value="income"
              onChange={handleType}
              checked={type === "income"}
            />
            <label className={styles.labelIncome}>Income</label>
            <input
              type="radio"
              name="type"
              value="expense"
              onChange={handleType}
              checked={type === "expense"}
            />
            <label>Expense</label>
          </div>

          <span
            className={cx(styles.error, amountError ? styles.errShow : null)}
          >
            Please enter a valid amount
          </span>
          <input
            className={styles.input}
            name="amount"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            min={0}
            onChange={handleAmount}
          />
        </div>
        <button className={styles.btn} type="submit" value="Submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addTrans })(AddTransaction);
