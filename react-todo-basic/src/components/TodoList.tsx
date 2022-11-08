import React from "react";
import { createUseStyles } from "react-jss";
import Todo from "../models/Todo";
import TodoCounter from "./TodoCounter";
import TodoListItem from "./TodoListItem";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
    maxWidth: 756,
    "& > *": {
      margin: [0, 10],
    },
  },
  toTopBtnContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

type TodoListProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const scrollTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {todos.length === 0 ? (
        <div>No todos yet...</div>
      ) : (
        <>
          <TodoCounter todos={todos} />
        </>
      )}
      {todos
        .sort((el1, el2) => (el1.completed > el2.completed ? 1 : -1))
        .map((todo) => (
          <TodoListItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      {todos.length > 15 && (
        <>
          <TodoCounter todos={todos} />
          <div className={classes.toTopBtnContainer}>
            <button onClick={scrollTop}>Back to Top</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
