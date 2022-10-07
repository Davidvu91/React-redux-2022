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
    case TYPES.ADD_JOB:
      return typeof action.payload === "string"
        ? {
            ...state,
            jobs: [...state.jobs, action.payload],
          }
        : state;
    case TYPES.DELETE_JOB:
      const copyJobs = [...state.jobs];
      if (typeof action.payload === "number")
        copyJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: copyJobs,
      };

    default:
      return state;
  }
};

export default todoReducer;
