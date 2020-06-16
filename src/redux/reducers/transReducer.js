import {
  GET_TRANS,
  ADD_TRANS,
  DELETE_TRANS,
  TRANS_LOADING,
} from "../actions/type";
import { v4 as uuid } from "uuid";

const initialState = {
  trans: [
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "Salary",
      amount: 3000000,
    },
    {
      id: uuid(),
      name: "MacBook",
      amount: -1000000,
    },
    {
      id: uuid(),
      name: "Daily Needs",
      amount: -500000,
    },
  ],
  hasMore: false,
  loading: false,
  balance: 1500000,
  income: 3000000,
  expense: 1500000,
};

export default function (state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case GET_TRANS:
      return {
        // Before connecting to the back end
        ...state,
      };
    case ADD_TRANS:
      newState = {
        ...state,
        trans: [...state.trans, action.payload],
        balance: state.balance + action.payload.amount,
      };
      if (action.payload.amount > 0) {
        return {
          ...newState,
          income: state.income + action.payload.amount,
        };
      } else {
        return {
          ...newState,
          expense: state.expense - action.payload.amount,
        };
      }
    case DELETE_TRANS:
      const trans = state.trans.find((tran) => tran.id === action.payload);
      newState = {
        ...state,
        trans: state.trans.filter((trans) => trans.id !== action.payload),
      };
      if (trans.amount > 0) {
        return {
          ...newState,
          balance: newState.balance - trans.amount,
          income: newState.income - trans.amount,
        };
      } else {
        return {
          ...newState,
          balance: newState.balance - trans.amount,
          expense: newState.expense + trans.amount,
        };
      }
    case TRANS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
