import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/actions/index";

const TodoRedux = () => {
  console.log("re-render>>>>");
  const dispatch = useDispatch();

  const newState = useSelector((store) => store.todoReducers);
  console.log(newState);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    dispatch(todoActions.setTodo(e.currentTarget.value));
  };

  return (
    <div>
      <h1>Todo Using Redux</h1>
      <input
        // value={job}
        onChange={handleInput}
      />
      <button>
        <label>Add</label>
      </button>
    </div>
  );
};

export default TodoRedux;
