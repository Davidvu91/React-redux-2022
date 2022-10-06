import * as TYPES from "../constant/todoConstant";

type payload = number | string;

export const setTodo = (payload: payload) => {
  return {
    type: TYPES.SET_JOB,
    payload,
  };
};

const todoActions = {
  setTodo,
};

export default todoActions;
