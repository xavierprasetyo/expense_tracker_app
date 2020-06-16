import React from "react";
import styles from "./TransItem.module.css";
import cx from "classnames";
import { rupiah } from "../Balance/Balance";
import { connect } from "react-redux";
import { deleteTrans } from "../../redux/actions/transAction";

const TransItem = ({ value: { amount, name, id }, deleteTrans }) => {
  const isExpense = amount > 0 ? false : true;

  const handleClick = () => {
    deleteTrans(id);
  };
  return (
    <div
      className={cx(
        styles.container,
        isExpense ? styles.expense : styles.income
      )}
    >
      <button className={styles.btn} onClick={handleClick}>
        x
      </button>
      <span>{name}</span>
      <span className={styles.amount}>{rupiah(amount)}</span>
    </div>
  );
};

export default connect(null, { deleteTrans })(TransItem);
