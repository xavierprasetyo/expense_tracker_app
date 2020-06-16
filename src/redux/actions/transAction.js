import { GET_TRANS, ADD_TRANS, DELETE_TRANS, TRANS_LOADING } from "./type";

export const getTrans = () => (dispatch) => {
  dispatch(setTransLoad);
  dispatch({
    type: GET_TRANS,
  });
};

export const addTrans = (trans) => (dispatch) => {
  dispatch({
    type: ADD_TRANS,
    payload: trans,
  });
};

export const deleteTrans = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TRANS,
    payload: id,
  });
};

export const setTransLoad = () => {
  return {
    type: TRANS_LOADING,
  };
};
