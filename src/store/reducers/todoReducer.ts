import * as TYPES from "../constant/todoConstant";

interface action {
  type: string;
  payload: string | number;
}

interface state {
  job: string;
  jobs: string[];
}
const initState = {
  job: "",
  jobs: [],
};

const todoReducer = (state: state = initState, action: action): state => {
  console.log("update state:", {
    state,
    action,
  });
  switch (action.type) {
    case TYPES.SET_JOB:
      return typeof action.payload === "string"
        ? {
            ...state,
            job: action.payload,
          }
        : state;

    default:
      return state;
  }
};

export default todoReducer;
