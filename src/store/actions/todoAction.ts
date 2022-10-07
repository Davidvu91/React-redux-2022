import * as TYPES from "../constant/todoConstant";

type payload = number | string;

export const setTodo = (payload: payload) => {
  return {
    type: TYPES.SET_JOB,
    payload,
  };
};

export const addTodo = (payload: payload) => {
  return {
    type: TYPES.ADD_JOB,
    payload,
  };
};

export const deleteTodo = (payload: payload) => {
  return {
    type: TYPES.DELETE_JOB,
    payload,
  };
};

const todoActions = {
  setTodo,
  addTodo,
  deleteTodo,
};

export default todoActions;
