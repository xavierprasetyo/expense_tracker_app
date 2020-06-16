import React, { useEffect } from "react";
import styles from "./Transaction.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import TransItem from "./TransItem";
import { connect } from "react-redux";
import { getTrans } from "../../redux/actions/transAction";

const Transaction = ({ trans, hasMore, getTrans }) => {
  useEffect(() => {
    getTrans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3 className={styles.header}>History</h3>
      <div className={styles.container} id="scrollable">
        <InfiniteScroll
          dataLength={trans.length}
          next={getTrans}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {trans.map((value) => (
            <TransItem value={value} key={value.id} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  trans: state.transaction.trans,
  hasMore: state.transaction.hasMore,
});

export default connect(mapStatetoProps, { getTrans })(Transaction);
