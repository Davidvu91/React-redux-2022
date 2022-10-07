import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/actions";

interface todoState {
  todoReducer: {
    job: string;
    jobs: string[];
  };
}
const TodoRedux = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const newState = useSelector((store: todoState) => {
    console.log(store);
    return store.todoReducer;
  });
  const { job, jobs } = newState;
  console.log({
    job,
    jobs,
  });

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    dispatch(todoActions.setTodo(e.currentTarget.value));
  };

  const handleAddJob = () => {
    dispatch(todoActions.addTodo(job));
    dispatch(todoActions.setTodo(""));
    inputRef.current?.focus();
  };

  const handleDeleteJob = (index: number) => {
    console.log(index);
    dispatch(todoActions.deleteTodo(index));
  };

  return (
    <div>
      <h1>Todo Using Redux</h1>
      <input ref={inputRef} value={job} onChange={handleInput} />
      <button onClick={handleAddJob}>
        <label>Add</label>
      </button>

      <ul>
        {jobs &&
          jobs.map((job, index) => {
            return (
              <li key={index}>
                {job}
                <span
                  onClick={() => {
                    handleDeleteJob(index);
                  }}
                  style={{ color: "red" }}
                >
                  {" "}
                  X
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoRedux;
