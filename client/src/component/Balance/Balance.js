import React from "react";
import styles from "./Balance.module.css";
import cx from "classnames";
import { connect } from "react-redux";

export const rupiah = (val) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const strBal = formatter.format(val);
  return strBal.slice(0, strBal.length - 3);
};

const Balance = ({ balance, income, expense }) => {
  return (
    <div>
      <div className={styles.balance}>
        <h3 className={styles.balanceText}>Balance</h3>
        <h2 className={styles.number}>{rupiah(balance)}</h2>
      </div>

      <div className={styles.cardContainer}>
        <div className={cx(styles.card, styles.income)}>
          <p className={styles.titleHeader}>Income</p>
          <p className={styles.amount}>{rupiah(income)}</p>
        </div>

        <div className={cx(styles.card, styles.expense)}>
          <p className={styles.titleHeader}>Expense</p>
          <p className={styles.amount}>{rupiah(expense)}</p>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  balance: state.transaction.balance,
  income: state.transaction.income,
  expense: state.transaction.expense,
});

export default connect(mapStatetoProps, null)(Balance);
